import $ from 'jquery'
import data from './data'
import { solutionOne, solutionTwo, crossRangeAnalysis } from './solution'

// Year 2023 | Day 5 | If You Give A Seed A Fertilizer

console.log(data)

$(() => {
  const performCrossRangeAnalysis = () => {
    const targetStart = parseInt($('#target-start').val() as string)
    const targetEnd = parseInt($('#target-end').val() as string)
    const targetRange = targetEnd - targetStart + 1
    const testStart = parseInt($('#test-start').val() as string)
    const testEnd = parseInt($('#test-end').val() as string)
    const testRange = testEnd - testStart + 1
    const { inRange, outRange } = crossRangeAnalysis([targetStart, targetRange], [testStart, testRange])
    $('#in-ranges-bar').html('')
    inRange.forEach(item => {
      const [start, range] = item
      $('#in-ranges-bar').append(
        `<div class="h-full bg-green-500 absolute" style="left: ${start * 20}px; width: ${range * 20}px"></div>`,
      )
    })
    $('#out-ranges-bar').html('')
    outRange.forEach(item => {
      const [start, range] = item
      $('#out-ranges-bar').append(
        `<div class="h-full bg-yellow-500 absolute" style="left: ${start * 20}px; width: ${range * 20}px"></div>`,
      )
    })
  }
  const updateTargetRange = () => {
    let start = parseInt($('#target-start').val() as string)
    let end = parseInt($('#target-end').val() as string)
    if (end < start) {
      end = start
      $('#target-end').val(start)
    }
    const range = end - start + 1
    $('#target-values').text(`${start} - ${end}`)
    $('#target-range').text(`${start} - ${range}`)
    $('#target-bar')
      .css('width', `${range * 20}px`)
      .css('margin-left', `${start * 20}px`)
    performCrossRangeAnalysis()
  }
  const updateTestRange = () => {
    let start = parseInt($('#test-start').val() as string)
    let end = parseInt($('#test-end').val() as string)
    if (end < start) {
      end = start
      $('#test-end').val(start)
    }
    const range = end - start + 1
    $('#test-values').text(`${start} - ${end}`)
    $('#test-range').text(`${start} - ${range}`)
    $('#test-bar')
      .css('width', `${range * 20}px`)
      .css('margin-left', `${start * 20}px`)
    performCrossRangeAnalysis()
  }

  $('#app').html(`
    <div class="pt-10 w-[1000px] mx-auto flex justify-around font-mono">
      <div class="w-[400px]">
        <div class="flex justify-between">
          <label>Target</label>
          <label id="target-values"></label>
        </div>
        <input id="target-start" type="range" min="0" max="100" value="0" class="range range-xs range-info w-full" />
        <input id="target-end" type="range" min="0" max="100" value="0" class="range range-xs range-info w-full" />
        <div class="flex justify-between">
          <label>Target Range</label>
          <label id="target-range"></label>
        </div>
      </div>
      <div class="w-[400px]">
        <div class="flex justify-between">
          <label>Test</label>
          <label id="test-values"></label>
        </div>
        <input id="test-start" type="range" min="0" max="100" value="0" class="range range-xs range-error w-full" />
        <input id="test-end" type="range" min="0" max="100" value="0" class="range range-xs range-error w-full" />
        <div class="flex justify-between">
          <label>Test Range</label>
          <label id="test-range"></label>
        </div>
      </div>
    </div>
    <div class="h-[50px] w-[2020px] mt-[50px] mx-auto border">
      <div id="target-bar" class="h-full bg-blue-400"></div>
    </div>
    <div class="h-[50px] w-[2020px] mt-[50px] mx-auto border">
      <div id="test-bar" class="h-full bg-red-500"></div>
    </div>
    <div id="in-ranges-bar" class="h-[50px] w-[2020px] mt-[50px] mx-auto border relative"></div>
    <div id="out-ranges-bar" class="h-[50px] w-[2020px] mt-[50px] mx-auto border relative"></div>

    <div class="font-mono text-[24px] mt-[100px]">
    <div id="solution-one">
      ${solutionOne()}
    </div>
    <div id="solution-two">
      ${solutionTwo()}
    </div>
  </div>

  `)
  $('#target-start')
    .on('input', () => updateTargetRange())
    .val(60)
  $('#target-end')
    .on('input', () => updateTargetRange())
    .val(90)
  $('#test-start')
    .on('input', () => updateTestRange())
    .val(30)
  $('#test-end')
    .on('input', () => updateTestRange())
    .val(50)
  updateTargetRange()
  updateTestRange()
})
