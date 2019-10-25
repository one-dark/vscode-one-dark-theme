import { join } from 'path'
import { workspace } from 'vscode'
import { generateTheme } from './themes'
import { detectConfigChanges, promptToReload, writeFile } from './utils'

const THEME_PATH = join(__dirname, '..', 'themes', 'one-dark.json')

export async function regenerateTheme() {
  const configuration = workspace.getConfiguration('oneDark')

  const theme = generateTheme({
    bold: configuration.get<boolean>('bold'),
    italic: configuration.get<boolean>('italic'),
    vivid: configuration.get<boolean>('vivid'),
  })

  return writeFile(THEME_PATH, theme)
}

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export function activate(): void {
  // Observe changes in the config
  workspace.onDidChangeConfiguration(event => {
    detectConfigChanges(event, () => {
      // update theme json file with new options
      regenerateTheme().then(promptToReload)
    })
  })
}
