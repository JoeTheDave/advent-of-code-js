export const add = (num1: string, num2: string) => {
  const digits1 = num1
    .split('')
    .map(n => parseInt(n))
    .reverse()
  const digits2 = num2
    .split('')
    .map(n => parseInt(n))
    .reverse()
  const sum = []
  let carry = 0
  for (let i = 0; i < Math.max(digits1.length, digits2.length); i++) {
    const digitSum = (digits1[i] || 0) + (digits2[i] || 0) + carry
    sum.push(digitSum > 9 ? digitSum - 10 : digitSum)
    carry = digitSum > 9 ? 1 : 0
  }
  if (carry) {
    sum.push(carry)
  }
  return sum.reverse().join('')
}
