// @ts-check
/**
 * @typedef {import("./types").Countdown} Countdown
 */

/**
 * @type {Countdown}
 */
export function countdown(element, options) {
  let _element = element
  let _options = {
    interval: options?.interval ?? 1000,
    targetDate: options?.targetDate ?? new Date()
  }
  let timeout

  function calculate() {
    const now = new Date().getTime()
    const distance = _options.targetDate.getTime() - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    const format = `${days}d ${hours}h ${minutes}m ${seconds}s`

    _element.innerHTML = format
  }

  function start() {
    if (timeout) return
    calculate()
    timeout = setInterval(calculate, _options.interval)
  }

  function stop() {
    if (timeout) {
      clearInterval(timeout)
      timeout = undefined
    }
  }
  start()
  return { start, stop }
}