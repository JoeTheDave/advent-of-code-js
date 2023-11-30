// https://adventofcode.com/2022/day/20
// https://adventofcode.com/2022/day/20/input

import { puzzleData, testData } from './data'

const grovePositioningSystem = () => {
  const useTestData = false
  const data = (useTestData ? testData : puzzleData).map(n => parseInt(n))

  return [part1(data), part2(data)]
}

const part1 = (data: number[]) => {
  let { actions, orderedList } = constructLists(data)
  orderedList = performEncryptionMix(orderedList, actions)

  const a = getNthNumber(orderedList, 1000).num
  const b = getNthNumber(orderedList, 2000).num
  const c = getNthNumber(orderedList, 3000).num

  return a + b + c
}

const part2 = (data: number[]) => {
  const encryptionKey = 811589153
  let { actions, orderedList } = constructLists(
    data.map(d => d * encryptionKey),
  )
  for (let x = 0; x < 10; x++) {
    orderedList = performEncryptionMix(orderedList, actions)
  }

  const a = getNthNumber(orderedList, 1000).num
  const b = getNthNumber(orderedList, 2000).num
  const c = getNthNumber(orderedList, 3000).num

  return a + b + c
}

export default grovePositioningSystem

export const solutionData = {
  puzzleData,
  testData,
}

export interface ActionListItem {
  num: number
  id: number
}

export interface OrderedListItem {
  num: number
  id: number
  prevRef: OrderedListItem
  nextRef: OrderedListItem
}

export const constructLists = (data: number[]) => {
  const actions: ActionListItem[] = [...data].map((n, i) => ({ num: n, id: i }))
  const orderedListConstruct: any = [...data].map((n, i) => ({
    num: n,
    id: i,
    prevRef: null,
    nextRef: null,
  }))
  orderedListConstruct.forEach((item: any, idx: any, arr: any[]) => {
    if (item.id === 0) {
      item.prevRef = arr[arr.length - 1]
      item.nextRef = arr[item.id + 1]
    } else if (item.id === arr.length - 1) {
      item.prevRef = arr[item.id - 1]
      item.nextRef = arr[0]
    } else {
      item.prevRef = arr[item.id - 1]
      item.nextRef = arr[item.id + 1]
    }
  })
  const orderedList: OrderedListItem[] = orderedListConstruct
  return {
    actions,
    orderedList,
  }
}

export const performEncryptionMix = (
  orderedList: OrderedListItem[],
  actions: ActionListItem[],
) => {
  actions.forEach(actionItem => {
    const orderedItem = orderedList.find(
      i => i.id === actionItem.id,
    ) as OrderedListItem
    for (
      let x = 0;
      x < Math.abs(actionItem.num % (orderedList.length - 1));
      x++
    ) {
      if (actionItem.num > 0) {
        const swapItem = orderedItem.nextRef
        const forwardConnection = swapItem.nextRef
        const rearwardConnection = orderedItem.prevRef
        rearwardConnection.nextRef = swapItem
        swapItem.prevRef = rearwardConnection
        swapItem.nextRef = orderedItem
        orderedItem.prevRef = swapItem
        orderedItem.nextRef = forwardConnection
        forwardConnection.prevRef = orderedItem
      } else if (actionItem.num < 0) {
        const swapItem = orderedItem.prevRef
        const forwardConnection = orderedItem.nextRef
        const rearwardConnection = swapItem.prevRef
        rearwardConnection.nextRef = orderedItem
        orderedItem.prevRef = rearwardConnection
        orderedItem.nextRef = swapItem
        swapItem.prevRef = orderedItem
        swapItem.nextRef = forwardConnection
        forwardConnection.prevRef = swapItem
      }
    }
  })
  return orderedList
}

export const getNthNumber = (list: OrderedListItem[], n: number) => {
  let root = list.find(i => i.num === 0) as OrderedListItem
  for (let x = 0; x < n; x++) {
    root = root.nextRef
  }
  return root
}

export const printList = (list: OrderedListItem[]) => {
  let root = list.find(n => n.num === 0) as OrderedListItem
  const results: number[] = [root.num]
  root = root.nextRef
  while (root.num !== 0) {
    results.push(root.num)
    root = root.nextRef
  }
  console.log(JSON.stringify(results))
}
