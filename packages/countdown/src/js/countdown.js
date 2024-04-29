// @ts-check
/**
 * @type {import("./types").Countdown}
 */
export function countdown(element, options) {
  const interval = 1000
  let _element = element
  let _options = {
    targetDate: options?.targetDate ?? new Date(),
    format: options?.format ?? 'date'
  }
  let timeout

  function calculate() {
    const now = new Date().getTime()
    const distance = _options.targetDate.getTime() - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    let format

    switch (_options.format) {
      case 'date':
        format = `${days}d ${hours}h ${minutes}m ${seconds}s`
        break
      case 'timer':
        format = `${days}:${hours}:${minutes}:${seconds}`
        break
      default:
        console.warn(
          `[countdown warn]: Invalid format has been provided: ${_options.format}, please provide a valid one from the following list:['date','timer']`
        )
        format = ''
        stop()
        break
    }

    _element.innerHTML = format
  }

  function start() {
    if (timeout) return
    calculate()
    timeout = setInterval(calculate, interval)
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
