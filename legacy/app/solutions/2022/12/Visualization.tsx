import { useEffect, useState } from 'react'
import { Grid, GridCell, solutionData } from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface HillClimbingAlgorithmVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const HillClimbingAlgorithmVisualization: FC<
  HillClimbingAlgorithmVisualizationProps
> = ({ componentInfo }) => {
  const [iterationCount, setIterationCount] = useState<number>(0)

  const { puzzleData: data } = solutionData
  const grid = new Grid(data)

  for (let i = 0; i < iterationCount; i++) {
    grid.advanceTowardsSummit()
  }

  return (
    <div className="h-full overflow-auto">
      <div> Hill Climbing Algorithm Visualization</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed top-2 right-2"
        onClick={() => {
          setIterationCount(iterationCount + 1)
        }}
      >
        Advance
      </button>
      <div className="w-[3400px] h=[2040px]">
        <div className="flex flex-wrap w-[3200px] mx-auto my-[100px]">
          {grid &&
            grid.cells.map(cell => {
              const { x, y, alpha, elevation, step, isGoal } = cell

              const color = 100 + Math.floor(((elevation + 1) / 26) * 150)

              return (
                <div
                  key={`cell-${y}-${x}`}
                  className={`border text-xs w-[40px] h-[40px] flex justify-center items-center relative${
                    isGoal ? ' border-green-400 ' : ''
                  }`}
                  style={{
                    backgroundColor:
                      cell.step === null
                        ? `rgb(${color},${color},${color})`
                        : `rgb(${color},0,0`,
                  }}
                >
                  {elevation}
                  {step !== null && (
                    <div className="absolute top-1 right-1 text-green-400">
                      {step}
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default HillClimbingAlgorithmVisualization
