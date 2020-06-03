import { ConfigurationChangeEvent } from "vscode";

export function detectConfigChanges(
  event: ConfigurationChangeEvent,
  onConfigChange: () => void
) {
  if (event.affectsConfiguration("oneDark")) {
    onConfigChange();
  }
}
