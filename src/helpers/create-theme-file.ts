import { join } from 'path'
import { workspace, WorkspaceConfiguration } from 'vscode'
import { writeFile, readFile } from './file'

const THEME_PATH = join(__dirname, '..', '..', 'themes', 'one-dark.json')

async function readThemeFile(path: string) {
  return readFile(join(__dirname, '..', 'config', path))
}

async function generateThemeConfig(config: WorkspaceConfiguration) {
  const italic = config.get<boolean>('italic')
  const vivid = config.get<boolean>('vivid')

  const filesToLoad = ['theme.json']

  if (italic) {
    filesToLoad.push('italic.json')
  }

  // Read all the config files from the files to load array
  const tokenColors = (await Promise.all(filesToLoad.map(readThemeFile))).flat()

  // Read editor colors from the editor config file
  const editorColors = await readFile(
    join(__dirname, '..', 'config', 'editor.json')
  )

  // Generate the new theme
  return {
    colors: editorColors,
    name: 'One dark',
    tokenColors,
    type: 'dark',
  }
}

export async function createThemeFile() {
  const theme = await generateThemeConfig(workspace.getConfiguration('oneDark'))

  return writeFile(THEME_PATH, theme)
}
