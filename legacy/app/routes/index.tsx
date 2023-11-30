import { useLoaderData, Link } from '@remix-run/react'
import { uniq } from 'lodash'
import { components } from 'legacy/app/lib/getVisualizationComponent'

import type { LoaderFunction } from '@remix-run/server-runtime'

interface LoaderData {
  solutions: { year: number; day: number; name: string }[]
  years: number[]
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const solutions = Object.keys(components).map(key => {
    const [year, day] = key
      .replace('vis', '')
      .split('_')
      .map(i => parseInt(i))
    return {
      year,
      day,
      name: components[key].name
        .replace('Visualization', '')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2'),
    }
  })

  const years = uniq(solutions.map(s => s.year))

  const data: LoaderData = {
    solutions,
    years,
  }

  return data
}

export default function Index() {
  const { solutions, years } = useLoaderData<LoaderData>()
  return (
    <div className="font-aoc bg-[#0f0f23] text-white w-full h-full p-2">
      <div>
        <div className="text-[#00cc00] text-shadow-aoc text-xl tracking-wide">
          Advent of Code Visualizations
        </div>
      </div>
      {years.map(year => (
        <div key={`year-${year}`} className="m-8 ">
          <div className="text-[#cccccc] text-xl tracking-wide">{year}</div>
          {solutions
            .filter(s => s.year === year)
            .map(s => (
              <Link
                to={`/${s.year}/${s.day}`}
                key={`solution-${s.year}-${s.day}`}
                className="mx-4 my-2 block text-[#00aa00] text-xl tracking-wide hover:text-[#99ff99]"
              >{`${s.day.toString().padStart(2, '0')} - ${s.name}`}</Link>
            ))}
        </div>
      ))}
    </div>
  )
}
