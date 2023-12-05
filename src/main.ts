import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <div class="border p-4">This is some text</div>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
