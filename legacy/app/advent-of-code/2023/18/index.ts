import $ from 'jquery'
import data, { testData } from './data'
import {
  solutionOne,
  solutionTwo,
  // getCoordinateList,
  // getCoordinateExtremes,
} from './solution'

// Year 2023 | Day 18 | Lavaduct Lagoon

$(() => {
  $('#app').html(`
    <div id="results"></div>
  `)

  // const canvas = document.getElementById('canvas') as HTMLCanvasElement
  // const ctx = canvas!.getContext('2d') as CanvasRenderingContext2D
  // const size = 6
  // const xOffset = 20
  // const yOffset = 100

  // const coordinates = getCoordinateList(data)
  // const [minY, maxY] = getCoordinateExtremes(coordinates)

  // const convertCoords = (coord: number[]) => {
  //   return [(coord[0] + xOffset) * size, (coord[1] + yOffset) * size] as [
  //     number,
  //     number,
  //   ]
  // }

  // ctx.beginPath()
  // ctx.lineWidth = 4
  // ctx.strokeStyle = '#FF0'

  // ctx.moveTo(...convertCoords(coordinates[0]))

  // for (let i = 1; i < coordinates.length; i++) {
  //   ctx.lineTo(...convertCoords(coordinates[i]))
  // }
  // ctx.stroke()

  // ctx.beginPath()
  // ctx.strokeStyle = '#F00'

  // let spans = []
  // for (let i = minY; i <= maxY; i++) {
  //   const coords = coordinates.filter(c => c[1] === i)
  //   if (coords.length) {
  //     if (!spans.length) {
  //       spans.push(...coords.map(c => c[0]))
  //     }
  //     ctx.moveTo(...convertCoords(coords[0]))
  //     ctx.lineTo(...convertCoords(coords[1]))
  //   } else {
  //     ctx.moveTo(...convertCoords([spans[0], i]))
  //     ctx.lineTo(...convertCoords([spans[1], i]))
  //   }

  //   console.log(coords)
  // }
  // ctx.stroke()

  $('#results').html(`
    <div class="font-mono text-[10px]">
      <div id="solution-one">
        ${solutionOne()}
      </div>
      <div id="solution-two">
        ${solutionTwo()}
      </div>
    </div>
  `)
})
