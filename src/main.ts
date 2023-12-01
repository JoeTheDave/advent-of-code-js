import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const url = window.location.pathname

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <span>${url}</span>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
