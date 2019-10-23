import { ConfigurationChangeEvent } from 'vscode'
import { createThemeFile } from './create-theme-file'
import { promptToReload } from './reload-prompt'

export async function detectConfigChanges(
  event: ConfigurationChangeEvent
): Promise<void> {
  if (event.affectsConfiguration('oneDark')) {
    // update theme json file with new options
    await createThemeFile()

    promptToReload()
  }
}
