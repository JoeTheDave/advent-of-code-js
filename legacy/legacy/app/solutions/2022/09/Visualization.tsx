import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface RopeBridgeVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const RopeBridgeVisualization: FC<RopeBridgeVisualizationProps> = ({
  componentInfo,
}) => {
  const { testData1, testData2, puzzleData } = solutionExports['solutionData']
  const data = testData1

  useEffect(() => {
    console.log(componentInfo)
    console.log(Object.keys(solutionExports))
    console.log(data)
  }, [])
  return (
    <div className="h-full">
      <div> Rope Bridge Visualization</div>
      <div className="w-full h-full flex items-center justify-center">
        Not Implemented
      </div>
    </div>
  )
}

export default RopeBridgeVisualization
