import $ from 'jquery'
import data, { testData } from './data'
import { solutionOne, solutionTwo, Network } from './solution'

// Year 2023 | Day 10 | Pipe Maze

const getCornerColor = (status: boolean | null) => {
  if (status !== null) {
    if (status) {
      return 'bg-green-500'
    } else {
      return 'bg-red-500'
    }
  } else {
    return 'bg-gray-500'
  }
}

// console.log(data)
$(() => {
  $('#app').html(`
    <div id="pipe-network" class="flex flex-wrap font-mono p-4"></div>
    <div id="pipe-network-beta" class="flex flex-wrap font-mono p-4"></div>
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

  const pipeData = testData
  const pipeNetwork = new Network(pipeData)
  pipeNetwork.stepPath()
  // pipeNetwork.mapPath()
  for (let i = 0; i < pipeData.length; i++) {
    $('#pipe-network').append(`
      <div class="flex">
        ${pipeNetwork.network
          .filter(node => node.y === i)
          .map(
            node => `
              <div class="border w-[75px] h-[75px] text-[36px] relative flex justify-center items-center${
                node.step !== null ? ' bg-red-900' : ''
              }">
                <div class="absolute top-0 left-[30px] text-[10px]">${
                  node.step
                }</div>
                ${node.nodeType}
                <div class="absolute w-[15px] h-[15px] top-0 right-0 ${getCornerColor(
                  node.ne.status,
                )}"></div>
                <div class="absolute w-[15px] h-[15px] bottom-0 right-0 ${getCornerColor(
                  node.se.status,
                )}"></div>
                <div class="absolute w-[15px] h-[15px] bottom-0 left-0 ${getCornerColor(
                  node.sw.status,
                )}"></div>
                <div class="absolute w-[15px] h-[15px] top-0 left-0 ${getCornerColor(
                  node.nw.status,
                )}"></div>
              </div>
            `,
          )
          .join('')}
      </div>
    `)
  }

  // const content = testData
  //   .map((dataRow, y) => {
  //     return `<div>${dataRow
  //       .split('')
  //       .map(
  //         (pipe, x) =>
  //           `<span id="node-${
  //             x + '-' + y
  //           }" class="transition duration-300">${pipe}</span>`,
  //       )
  //       .join('')}</div>`
  //   })
  //   .join('')

  // $('#pipe-network-beta').html(content)
  // const pathNodes = pipeNetwork.network.filter(n => n.step !== null)
  // pathNodes.forEach(n =>
  //   setTimeout(() => {
  //     $(`#node-${n.x}-${n.y}`).css('color', 'yellow')
  //     setTimeout(() => {
  //       $(`#node-${n.x}-${n.y}`).css('color', 'red')
  //     }, 200)
  //   }, (n.step || 0) * 50),
  // )
})
