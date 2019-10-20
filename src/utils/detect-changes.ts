import { extensions } from 'vscode'

function getExtensionConfiguration(): { [config: string]: any } {
  return extensions.getExtension('markskelton.vscode-one-dark-theme')
    .packageJSON.contributes.configuration.properties
}

export async function detectConfigChanges(): Promise<void> {
  const configs = Object.keys(getExtensionConfiguration()).map(c =>
    c
      .split('.')
      .slice(1)
      .join('.')
  )

  const updatedOptions = await compareConfigs(configs)

  // if there's nothing to update
  if (!updatedOptions) return

  // update theme json file with new options
  // return createThemeFile(updatedOptions).then(() => {
  //   console.log(green('New theme configuration file successfully created!'))
  //   promptToReload()
  // }).catch(err => {
  //   console.error(err)
  // })
}
