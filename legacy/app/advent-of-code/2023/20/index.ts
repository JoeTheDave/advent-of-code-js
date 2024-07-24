import $ from 'jquery'
import data, { testData } from './data'
import { solutionOne, solutionTwo } from './solution'

// Year 2023 | Day 20 | Pulse Propagation

$(() => {
  $('#app').html(`
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
