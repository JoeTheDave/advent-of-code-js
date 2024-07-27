export const isPandigital = (num: number | string) => {
  const signature = `${num}`
  let result = true
  if (result) {
    for (let i = 1; i <= signature.length; i++) {
      if (!signature.includes(`${i}`)) {
        result = false
        break
      }
    }
  }
  return result
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const generateWordScore = (name: string) =>
  name.split('').reduce((sum, letter) => sum + alphabet.indexOf(letter) + 1, 0)
