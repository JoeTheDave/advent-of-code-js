import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface GiantSquidVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const GiantSquidVisualization: FC<GiantSquidVisualizationProps> = ({
  componentInfo,
}) => {
  const { testData, puzzleData } = solutionExports['solutionData']
  const data = testData

  useEffect(() => {
    console.log(componentInfo)
    console.log(Object.keys(solutionExports))
    console.log(testData, puzzleData)
  }, [])
  return (
    <div className="h-full">
      <div> Giant Squid Visualization</div>
      <div className="w-full h-full flex items-center justify-center">
        Not Implemented
      </div>
    </div>
  )
}

export default GiantSquidVisualization
