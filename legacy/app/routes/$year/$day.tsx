import { useLoaderData } from '@remix-run/react'
import { useWindowSize } from '@react-hook/window-size'
import getVisualizationComponent from 'legacy/app/lib/getVisualizationComponent'

import type { LoaderFunction } from '@remix-run/server-runtime'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface LoaderData {
  solutionInfo: {
    year: number
    day: number
  }
}

export const loader: LoaderFunction = async ({ params, request }) => {
  console.log(__dirname)

  const data: LoaderData = {
    solutionInfo: {
      year: parseInt(params.year as string),
      day: parseInt(params.day as string),
    },
  }

  return data
}

export default function SeedRoute() {
  const { solutionInfo } = useLoaderData<LoaderData>()
  const [width, height] = useWindowSize()

  const Component = getVisualizationComponent(
    solutionInfo.year,
    solutionInfo.day,
  )

  const info: VisualizationComponentInfo = {
    solutionInfo,
    browserInfo: {
      width,
      height,
    },
  }

  return <Component componentInfo={info} />
}
