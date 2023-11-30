import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface SomeAssemblyRequiredVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const SomeAssemblyRequiredVisualization: FC<
  SomeAssemblyRequiredVisualizationProps
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
      <div> Some Assembly Required Visualization</div>
      <div className="w-full h-full flex items-center justify-center">
        Not Implemented
      </div>
    </div>
  )
}

export default SomeAssemblyRequiredVisualization
