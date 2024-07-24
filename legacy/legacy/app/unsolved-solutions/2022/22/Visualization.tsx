import { useEffect } from 'react'
import { solutionData, Grid, GridSquare, prepareData } from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from 'legacy/app/lib/types/VisualizationComponentInfo'

interface MonkeyMapVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const MonkeyMapVisualization: FC<MonkeyMapVisualizationProps> = ({
  componentInfo,
}) => {
  const { dataRows, instructions } = prepareData(solutionData.testData)
  const grid = new Grid(dataRows)
  console.log(grid.flatSquares.length)
  const squareSize = 10
  const spacing = 2
  const showCoords = false

  return (
    <div className="h-full">
      <div> Monkey Map Visualization</div>
      <div className="w-full h-full relative ml-3">
        {grid.flatSquares.map(s => (
          <div
            style={{
              width: squareSize,
              height: squareSize,
              padding: 5,
              top: (squareSize + spacing) * s.y,
              left: (squareSize + spacing) * s.x,
              fontSize: 8,
              backgroundColor: `${
                s.type === ' ' ? '#EEE' : s.type === '.' ? '#999' : '#F99'
              }`,
            }}
            className="absolute flex flex-col justify-between items-center"
            key={`${s.x}-${s.y}`}
          >
            {showCoords && (
              <>
                <div>{s.nN && `(${s.nN.x},${s.nN.y})`}</div>
                <div className="flex justify-between w-full">
                  <div>{s.wN && `(${s.wN.x},${s.wN.y})`}</div>
                  <div>{`(${s.x},${s.y})`}</div>
                  <div>{s.eN && `(${s.eN.x},${s.eN.y})`}</div>
                </div>
                <div>{s.sN && `(${s.sN.x},${s.sN.y})`}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonkeyMapVisualization
