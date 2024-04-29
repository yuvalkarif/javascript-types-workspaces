interface Options {
  targetDate: Date
  format: 'date' | 'timer'
}
export type Countdown = (
  element: HTMLElement,
  options?: Partial<Options>
) => {
  start: () => void
  stop: () => void
}
