import $ from 'jquery'
import data from './data'
import { solutionOne, solutionTwo, Network } from './solution'

// Year 2023 | Day 10 | Pipe Maze

// console.log(data)
$(() => {
  $('#app').html(`
    <div id="pipe-network" class="font-mono text-[6px] p-4"></div>
    <div id="results"></div>
  `)

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

  const content = data
    .map((dataRow, y) => {
      return `<div>${dataRow
        .split('')
        .map((pipe, x) => `<span id="node-${x + '-' + y}">${pipe}</span>`)
        .join('')}</div>`
    })
    .join('')

  $('#pipe-network').html(content)
  const pipeNetwork = new Network(data)
  pipeNetwork.mapPath()
  const pathNodes = pipeNetwork.network.filter(n => n.step !== null)
  pathNodes.forEach(n =>
    setTimeout(() => {
      $(`#node-${n.x}-${n.y}`).css('color', 'red')
    }, (n.step || 0) * 10),
  )
})
