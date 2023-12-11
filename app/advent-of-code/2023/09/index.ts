import $ from 'jquery'
import data from './data'
import { solutionOne, solutionTwo, mapDataSequence, constructSequenceList, iterateSequenceList } from './solution'

// Year 2023 | Day 9 | Mirage Maintenance

console.log(data)

$(() => {
  $('#app').html(`
  <div class="font-mono p-10">
    <div id="sequence-activators" class="flex flex-wrap"></div>
    <div id="sequence-label" class="border p-4 my-10 w-[60px] text-center">-</div>
    <div id="sequence-list" class="mt-10"></div>
  </div>
  

  <!-- -->

  <div class="font-mono text-[24px] mt-[100px]">
    <div id="solution-one">
      ${solutionOne()}
    </div>
    <div id="solution-two">
      ${solutionTwo()}
    </div>
  </div>`)

  const sequenceActivators = $('#sequence-activators')
  for (let i = 1; i <= data.length; i++) {
    sequenceActivators.append(`
      <div data-sequence-id="${i}" class="border mr-1 mb-1 p-2 w-[60px] text-center cursor-pointer hover:bg-green-500 hover:text-black">${i}</div>
    `)
  }
  sequenceActivators.on('click', 'div', e => {
    const sequenceId = parseInt($(e.target).attr('data-sequence-id') || '')
    const sequence = mapDataSequence(data[sequenceId])
    const sequenceList = constructSequenceList(sequence)
    const iteratedList = iterateSequenceList(sequenceList)
    $('#sequence-label').text(sequenceId)
    $('#sequence-list').html(
      iteratedList
        .map(seq => `<div class="flex">${seq.map(num => `<div class="p-2">${num}</div>`).join('')}</div>`)
        .join(''),
    )
  })
})
