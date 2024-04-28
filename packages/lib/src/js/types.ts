interface Options {
  interval: number
  targetDate: Date
}
export type Countdown = (
  element: HTMLElement,
  options?: Partial<Options>
) => {
  start: () => void
  stop: () => void
}
