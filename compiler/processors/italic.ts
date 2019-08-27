import { Scopes, Setting } from '../types'
import { addScope } from '../utils/scopes'

export function processItalic (
  scopes: Scopes,
  scope: string,
  setting: Setting
): void {
  if (setting === undefined) return

  const scopeLocation = setting === '${{ settings.italic }}'
    ? scopes.italic
    : scopes.normal

  addScope(scopeLocation, 'fontStyle:italic', scope, { fontStyle: 'italic' })
}
