import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface NoSuchThingAsTooMuchVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const NoSuchThingAsTooMuchVisualization: FC<
  NoSuchThingAsTooMuchVisualizationProps
> = ({ componentInfo }) => {
  const { testData, puzzleData } = solutionExports['solutionData']
  const data = testData

  useEffect(() => {
    console.log(componentInfo)
    console.log(Object.keys(solutionExports))
    console.log(testData, puzzleData)
  }, [])
  return (
    <div className="h-full">
      <div> No Such Thing as Too Much Visualization</div>
      <div className="w-full h-full flex items-center justify-center">
        Not Implemented
      </div>
    </div>
  )
}

export default NoSuchThingAsTooMuchVisualization
