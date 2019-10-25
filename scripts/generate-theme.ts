import { join } from 'path'
import { generateTheme } from '../src/themes'
import { writeFile } from '../src/utils/file'

writeFile(
  join(__dirname, '..', 'themes', 'one-dark.json'),
  generateTheme({ italic: true })
)
