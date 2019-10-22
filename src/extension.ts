import { workspace } from 'vscode'
import { detectConfigChanges } from './utils/detect-changes'

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export function activate(): void {
  // Observe changes in the config
  workspace.onDidChangeConfiguration(detectConfigChanges)
}
