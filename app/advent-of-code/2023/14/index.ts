import data from './data'
import { solutionOne, solutionTwo } from './solution'

// Year 2023 | Day 14 | Parabolic Reflector Dish

// console.log(data)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="font-mono text-[24px]">
    <div id="solution-one">
      ${solutionOne()}
    </div>
    <div id="solution-two">
      ${solutionTwo()}
    </div>
  </div>
`
