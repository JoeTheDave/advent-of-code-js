import { useEffect } from 'react'
import * as THREE from 'three'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface BoilingBouldersVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const BoilingBouldersVisualization: FC<BoilingBouldersVisualizationProps> = ({
  componentInfo,
}) => {
  const { testData, puzzleData } = solutionExports['solutionData']
  const { browserInfo } = componentInfo
  const data = testData

  const cubeCoordinates = data.map(d => {
    const [x, y, z] = d.split(',').map(i => parseInt(i))
    return { x, y, z }
  })

  return (
    <div id="contentWindow" className="h-full">
      <div> Boiling Boulders Visualization</div>
      <div className="w-full h-full flex items-center justify-center">
        Not Implemented
      </div>
    </div>
  )
}

export default BoilingBouldersVisualization
