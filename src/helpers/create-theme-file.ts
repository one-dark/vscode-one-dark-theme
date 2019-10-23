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

  // Read the token colors from the source theme files
  const tokenColors = (await Promise.all(filesToLoad.map(readThemeFile))).flat()

  // Generate the new theme
  return {
    colors: readFile(join(__dirname, '..', 'config', 'editor.json')),
    name: 'One dark',
    tokenColors,
    type: 'dark',
  }
}

export async function createThemeFile() {
  const theme = await generateThemeConfig(workspace.getConfiguration('oneDark'))

  return writeFile(THEME_PATH, theme)
}
