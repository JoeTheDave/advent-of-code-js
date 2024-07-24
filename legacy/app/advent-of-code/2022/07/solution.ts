import data from './data'

// No Space Left On Device

// https://adventofcode.com/2022/day/7
// https://adventofcode.com/2022/day/7/input

export interface File {
  name: string
  type: 'file'
  size: number
}
export interface Dir {
  name: string
  type: 'dir'
  contents: (File | Dir)[]
}

export const createDir = (name: string) => {
  return {
    name,
    type: 'dir',
    contents: [],
  } as Dir
}

export const createFile = (name: string, size: number) => {
  return {
    name,
    type: 'file',
    size,
  } as File
}

export const getDirSize = (dir: Dir) => {
  return dir.contents.reduce((size, i): number => {
    if (i.type === 'file') {
      return size + i.size
    } else {
      return size + getDirSize(i)
    }
  }, 0)
}

export const generateFileSystem = (data: string[]) => {
  const fileSystem = createDir('/')
  let workingDir: Dir[] = []
  let flatDirs: Dir[] = []

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === '$') {
      const [_, cmd, param] = data[i].split(' ')
      if (cmd === 'cd') {
        if (param === '/') {
          workingDir = [fileSystem]
        } else if (param === '..') {
          workingDir = workingDir.slice(0, -1)
        } else {
          const newDir = workingDir.slice(-1)[0].contents.find(d => d.type === 'dir' && d.name === param) as Dir
          workingDir.push(newDir)
        }
      }
      if (cmd === 'ls') {
        for (let n = i + 1; true; n++) {
          if (!data[n] || data[n][0] === '$') {
            break
          } else {
            const output = data[n].split(' ')
            if (output[0] === 'dir') {
              const [type, name] = output
              const dir = createDir(name)
              flatDirs.push(dir)
              workingDir.slice(-1)[0].contents.push(dir)
            } else {
              const [size, name] = output
              workingDir.slice(-1)[0].contents.push(createFile(name, parseInt(size)))
            }
          }
        }
      }
    }
  }
  return { flatDirs, fileSystem }
}

export const solutionOne = () => {
  const { flatDirs } = generateFileSystem(data)
  return flatDirs
    .map(d => getDirSize(d))
    .filter(s => s <= 100000)
    .reduce((sum, num) => sum + num)
}

export const solutionTwo = () => {
  const { flatDirs, fileSystem } = generateFileSystem(data)
  const deleteAtLeast = 30000000 - (70000000 - getDirSize(fileSystem))
  return Math.min(...flatDirs.map(d => getDirSize(d)).filter(s => s >= deleteAtLeast))
}
