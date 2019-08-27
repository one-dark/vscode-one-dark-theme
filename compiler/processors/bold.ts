import { Scopes, Setting } from '../types'
import { addScope } from '../utils/scopes'

export function processBold (
  scopes: Scopes,
  scope: string,
  setting: Setting
): void {
  if (setting === undefined) return

  const scopeLocation = setting === '${{ settings.bold }}'
    ? scopes.bold
    : scopes.normal

  addScope(scopeLocation, 'fontStyle:bold', scope, { fontStyle: 'bold' })
}
