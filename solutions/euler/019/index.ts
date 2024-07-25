// Project Euler | Problem 19 | Counting Sundays
// https://projecteuler.net/problem=19

export const displayName = 'EULER | Problem 19 | Counting Sundays'
export const complete = true

const monthGenerator = (year: number, month: number) => {
  if ([4, 6, 9, 11].includes(month)) {
    return 30
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    return 31
  } else {
    return year % 4 === 0 ? 29 : 28
  }
}

export const solution = () => {
  let weekDay = 2 // Monday
  let firstMonthDaySundays = 0
  for (let y = 1901; y <= 2000; y++) {
    for (let m = 1; m <= 12; m++) {
      for (let d = 1; d <= monthGenerator(y, m); d++) {
        weekDay = weekDay === 7 ? 1 : weekDay + 1 // Jan 1 1901 is Tuesday
        if (d === 1 && weekDay === 1) {
          firstMonthDaySundays++
        }
      }
    }
  }
  return firstMonthDaySundays
}
