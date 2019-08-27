import { Scopes, Scope, Setting } from '../types'
import { hasProp } from '../utils/has-prop'

const createScope = (name: string, scope: string): Scope => ({
  name,
  scope: [scope],
  settings: {
    fontStyle: 'italic'
  }
})

export function processItalic (
  scopes: Scopes,
  scope: string,
  setting: Setting
): void {
  const scopeLocation = setting === '${{ settings.italic }}'
    ? scopes.italic
    : scopes.normal

  // If other scopes already exist, add this to the existing list
  if (hasProp(scopeLocation, '')) {
    createScope('', scope)
  }
}
