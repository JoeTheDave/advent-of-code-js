import $ from 'jquery'
import data, { testData } from './data'
import {
  solutionOne,
  solutionTwo,
  GridMapper,
  GridSquare,
  getBigData,
} from './solution'

// Year 2023 | Day 21 | Step Counter

const renderGrid = (grid: GridSquare[], size: number) => {
  const content = grid
    .filter(s => !s.stepable || s.occupied)
    .map(square => {
      const classes: string[] = ['absolute']
      if (!square.stepable) {
        classes.push('bg-gray-300')
      } else if (square.occupied) {
        classes.push('bg-red-500')
      }
      return `<div class="${classes.join(
        ' ',
      )}" style="width: ${size}px; height: ${size}px; top: ${
        square.y * size
      }px; left: ${square.x * size}px"></div>`
    })
    .join('')
  $('#grid').html(content)
}

$(() => {
  $('#app').html(`
  <div id="visualization"></div>
  <div id="results"></div>
  `)

  // const bigData = getBigData()
  const dataSize = data.length
  const squareSize = 10
  const gridSize = dataSize * squareSize
  const processor = new GridMapper(data)
  const midpoint = Math.floor(dataSize / 2)
  let iteration = 0
  processor.lookup[`${midpoint}|${midpoint}`].occupied = true

  $('#visualization').html(`
  <div class="p-5 pb-0">
    <button id="iterator" class="btn btn-outline btn-secondary">Secondary</button>
    <span id="iteration" class="inline-block pl-10">${iteration}</span>
  </div>
  <div id="grid" class="m-5 bg-gray-700 relative" style="width: ${gridSize}px; height: ${gridSize}px; "></div>
  `)

  for (let i = 1; i <= iteration; i++) {
    processor.step()
  }
  renderGrid(processor.grid, squareSize)
  $('#iteration').text(
    `${iteration} - ${processor.grid.filter(s => s.occupied).length}`,
  )

  $('#iterator').on('click', () => {
    processor.step()
    renderGrid(processor.grid, squareSize)
    iteration++
    $('#iteration').text(
      `${iteration} - ${processor.grid.filter(s => s.occupied).length}`,
    )
  })

  $('#results').html(`
  <div class="font-mono text-[24px]">
    <div id="solution-one">
      ${solutionOne()}
    </div>
    <div id="solution-two">
      ${solutionTwo()}
    </div>
  </div>
  `)
})
