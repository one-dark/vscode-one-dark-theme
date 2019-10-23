import { join } from 'path'
import { workspace, WorkspaceConfiguration } from 'vscode'
import { writeFile, readFile } from './file'

const THEME_PATH = join(__dirname, '..', '..', 'src', 'one-dark.json')

async function readThemeFile(path: string) {
  return readFile(join(__dirname, '..', 'config', path))
}

async function generateThemeConfig(config: WorkspaceConfiguration) {
  const italic = config.get<boolean>('italic')
  const vivid = config.get<boolean>('vivid')

  const filesToLoad = ['theme']

  if (italic) {
    filesToLoad.push('italic')
  }

  const theme = {
    name: 'One dark',
    tokenColors: await Promise.all(filesToLoad.map(readThemeFile)),
    type: 'dark',
  }
}

export async function createThemeFile() {
  const theme = await generateThemeConfig(workspace.getConfiguration('oneDark'))

  return writeFile(THEME_PATH, theme)
}
