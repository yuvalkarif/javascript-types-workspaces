import './style.css'
import { countdown } from 'lib'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Countdown</h1>
    <h2>Powered by vite, jsdoc, typescript and pnpm workspaces</h2>
    <p id="countdown" class="read-the-docs" />
    <div class="cards-wrapper">
    <div class="card">
    <button id="stop-btn" type="button">Stop</button>
    </div>
    <div class="card">
    <button id="start-btn" type="button">Start</button>
    </div>
    </div>
    
  </div>
`
const { start, stop } = countdown(document.querySelector<HTMLParagraphElement>('#countdown')!, {
  targetDate: new Date('2024-12-31T23:59:59')
})

document.querySelector<HTMLButtonElement>('#start-btn')?.addEventListener('click', start)
document.querySelector<HTMLButtonElement>('#stop-btn')!.addEventListener('click', stop)
