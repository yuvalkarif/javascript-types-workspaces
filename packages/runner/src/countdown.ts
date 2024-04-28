interface Options {
  interval: number
  targetDate: Date
}
export class Countdown {
  private element: HTMLElement
  private options: Options
  private timemout: number | undefined
  constructor(element: HTMLElement, options?: Partial<Options>) {
    this.element = element
    this.options = {
      interval: options?.interval ?? 1000,
      targetDate: options?.targetDate ?? new Date()
    }
    this.start()
  }

  private calculate() {
    // Create time values for current and target
    const now = new Date().getTime()
    const distance = this.options.targetDate.getTime() - now

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    const format = `${days}d ${hours}h ${minutes}m ${seconds}s`

    // Display the countdown
    this.element.innerHTML = format
  }

  public start() {
    this.calculate()
    this.timemout = setInterval(this.calculate.bind(this), 1000)
  }

  public stop() {
    if (this.timemout) {
      clearInterval(this.timemout)
      this.timemout = undefined
    }
  }
}
