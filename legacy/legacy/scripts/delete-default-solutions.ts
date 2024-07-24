import { existsSync, rmSync } from 'fs'
import { generateDynamicImportFile } from './generate-dynamic-import-file'

export const deleteDefaultSolutions = async () => {
  const solutionsPath = `${__dirname}/../app/solutions/`

  if (existsSync(solutionsPath)) {
    rmSync(solutionsPath, { recursive: true, force: true })
  }

  generateDynamicImportFile()
}

deleteDefaultSolutions()
