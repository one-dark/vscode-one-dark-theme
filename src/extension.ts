import { workspace } from 'vscode'
import { detectConfigChanges } from './utils/detect-changes'

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export function activate (): void {
  // Initially trigger the config change detection
  detectConfigChanges().catch(console.error)

  // Observe changes in the config
  workspace.onDidChangeConfiguration(detectConfigChanges)
}
