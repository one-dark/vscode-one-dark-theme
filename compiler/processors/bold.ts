import { Scopes, Config } from '../types'
import hasProp from '../utils/has-prop'

export function processBold (
  scopes: Scopes,
  scope: string,
  setting: Config.Setting
) {
  const scopeLocation = setting === '${{ settings.bold }}'
    ? scopes.bold
    : scopes.normal

  // If other scopes already exist, add this to the existing list
  if (hasProp(scopeLocation, '')) {
    createScope
  }
}

const createScope = (name: string, scope: string) => ({
  name,
  scope: [scope],
  settings: {
    fontStyle: 'bold'
  }
})
