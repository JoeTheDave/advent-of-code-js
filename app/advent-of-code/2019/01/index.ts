import data, { testData } from './data'

console.log(testData)
console.log(data)

const solutionOne = () => {
  return null
}

const solutionTwo = () => {
  return null
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="solution-one">
      ${solutionOne()}
    </div>
    <div id="solution-two">
      ${solutionTwo()}
    </div>
  </div>
`
