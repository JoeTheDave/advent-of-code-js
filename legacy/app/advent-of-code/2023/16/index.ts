import $ from 'jquery'
import data, { testData } from './data'
import { solutionOne, solutionTwo, Grid } from './solution'

// Year 2023 | Day 16 | The Floor Will Be Lava

// const grid = new Grid(data)
// const size = 12

$(() => {
  //   $('#app').html(`
  //     <div id="grid" class="relative font-mono" style="font-size: ${Math.floor(
  //       size * 0.9,
  //     )}px"></div>
  //     <div class="absolute" style="top: ${grid.gridHeight * size + 20}px">
  //       <div id="results"></div>
  //     </div>
  //   `)
  //   const render = () => {
  //     $('#grid').html(
  //       grid.squares
  //         .map(
  //           square =>
  //             `<div class="absolute${
  //               square.energized ? ' bg-[#040]' : ''
  //             } flex justify-center items-center" style="top: ${
  //               square.y * size
  //             }px; left: ${
  //               square.x * size
  //             }px; width: ${size}px; height: ${size}px;">${square.squareType
  //               .replace('?', '\\')
  //               .replace('.', '')}</div>`,
  //         )
  //         .join('') +
  //         grid.movers
  //           .map(
  //             mover =>
  //               `<div class="text-yellow-200 absolute flex justify-center items-center" style="top: ${
  //                 mover.y * size
  //               }px; left: ${
  //                 mover.x * size
  //               }px; width: ${size}px; height: ${size}px;">*</div>`,
  //           )
  //           .join(''),
  //     )
  //   }
  //   const doStep = () => {}
  //   render()
  //   let interval = 0
  //   setInterval(() => {
  //     console.log(interval++)
  //     grid.step()
  //     render()
  //   }, 300)
  // $('#results').html(`
  //   <div class="font-mono text-[24px]">
  //   <div id="solution-one">
  //     ${solutionOne()}
  //   </div>
  //   <div id="solution-two">
  //     ${solutionTwo()}
  //   </div>
  // </div>
  // `)
})
