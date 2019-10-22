import { extensions, ConfigurationChangeEvent } from 'vscode'
import { promptToReload } from './reload-prompt'

function getExtensionConfiguration(): { [config: string]: any } {
  return extensions.getExtension('markskelton.vscode-one-dark-theme')
    .packageJSON.contributes.configuration.properties
}

async function createThemeFile() {}

export async function detectConfigChanges(
  event: ConfigurationChangeEvent
): Promise<void> {
  const extensionSettingChanged = Object.keys(getExtensionConfiguration()).some(
    key => event.affectsConfiguration(key)
  )

  if (extensionSettingChanged) {
    // update theme json file with new options
    await createThemeFile()

    promptToReload()
  }
}
