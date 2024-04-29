import './style.css'
import { countdown } from 'countdown/js-types'
import { countdown as countdown_ts } from 'countdown/ts'
import { countdown as countdown_js } from 'countdown/js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>New Year's Eve 2025 Countdown</h1>
    <h2>Powered by vite, jsdoc, typescript and pnpm workspaces</h2>
    <p id="countdown" class="countdown">
    0d 00h 00m 00s
    </p>
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
const countdownElement =
  document.querySelector<HTMLParagraphElement>('#countdown')!

/**
 * Replace `countdown` with `countdown_ts` or `countdown_js` to see the diffrences between the methods
 */
const { start, stop } = countdown(countdownElement, {
  targetDate: new Date('2024-12-31T23:59:59'),
  format: 'date'
})

document
  .querySelector<HTMLButtonElement>('#start-btn')!
  .addEventListener('click', start)
document
  .querySelector<HTMLButtonElement>('#stop-btn')!
  .addEventListener('click', stop)
