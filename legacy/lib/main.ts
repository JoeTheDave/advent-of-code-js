import { range } from 'lodash'
import data from './appData.json'
import type { AdventDayDetail } from './db'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="h-full bg-[#0f0f22] text-white overflow-y-auto">
    <h2 class="p-6 aoc-header-text text-[24px]">Advent of Code</h2>
    ${Object.keys(data)
      .reverse()
      .map(
        year => `<div class="pl-10 pb-10">
      <div class=" aoc-header-text text-[24px] pb-4">${year}</div>
        <div class="flex flex-wrap">
          ${Object.keys(data[year])
            .map(day => {
              const adventData = data[year][day] as AdventDayDetail
              let progressClass = ['border']
              if (adventData.generated) {
                progressClass.push('border-solid')
                switch (adventData.stars) {
                  case 1:
                    progressClass.push('border-gray-300')
                    progressClass.push('text-gray-300')
                    progressClass.push('bg-[#123]')
                    break
                  case 2:
                    progressClass.push('border-[#FFFF66]')
                    progressClass.push('text-white')
                    progressClass.push('day-complete')
                    progressClass.push('bg-[#345]')
                    break
                  default:
                    progressClass.push('border-gray-600')
                    progressClass.push('text-gray-600')
                }
              } else {
                progressClass.push('border-dashed')
                progressClass.push('border-gray-800')
                progressClass.push('text-gray-800')
              }
              let content = `<div class="p-2 w-[60px] h-[60px] text-center ${progressClass.join(' ')}">
              <div>${day}</div>
              <div class="text-[24px] mt-[-3px] ${adventData.stars === 2 ? 'text-[#FFFF66]' : 'text-gray-300'}">${range(
                adventData.stars,
              )
                .map(() => '*')
                .join('')}</div>
              </div>`
              content = adventData.generated
                ? `<a href="/app/advent-of-code/${year}/${day.padStart(2, '0')}/" title="${
                    adventData.name
                  }">${content}</a>`
                : content
              return `<div class="mr-4 mb-4">${content}</div>`
            })
            .join('')}
        </div>
      </div>`,
      )
      .join('')}
  </div>
`
