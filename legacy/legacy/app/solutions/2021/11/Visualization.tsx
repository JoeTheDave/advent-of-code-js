import { useState } from 'react'
import { solutionData, Grid } from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface DumboOctopusVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const data = solutionData.testData
const grid = new Grid(data)

const DumboOctopusVisualization: FC<DumboOctopusVisualizationProps> = ({
  componentInfo,
}) => {
  const [step, setStep] = useState<number>(0)

  return (
    <div className="h-full">
      <div> Dumbo Octopus Visualization</div>
      <div className="flex justify-center relative top-40">Step: {step}</div>
      <div className="flex justify-center relative top-48">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            grid.executeStep()
            setStep(step + 1)
          }}
        >
          Step
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-wrap" style={{ width: 400 }}>
          {grid.flatCells.map((cell, idx) => {
            const color = Math.floor(
              ((cell.energy === 0 ? 10 : cell.energy) / 10) * 155 + 100,
            )
            return (
              <div
                key={idx}
                className="border w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: `rgb(${color}, ${color}, ${color})` }}
              >
                {cell.energy}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DumboOctopusVisualization
