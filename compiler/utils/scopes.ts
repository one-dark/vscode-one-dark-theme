import { Scope, ScopeMap, ScopeSettings } from '../types'
import { hasProp } from './has-prop'

const createScope = (scope: string, settings: ScopeSettings): Scope => ({
  scope: [scope],
  settings
})

export function addScope (
  scopeMap: ScopeMap,
  scopeKey: string,
  scope: string,
  settings: ScopeSettings
): void {
  // If other scopes already exist, add this to the existing list
  if (hasProp(scopeMap, scopeKey)) {
    scopeMap[scopeKey].scope.push(scope)
  } else {
    scopeMap[scopeKey] = createScope(scope, settings)
  }
}
