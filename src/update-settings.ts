import { ConfigurationTarget, workspace } from "vscode"
import { ThemeConfiguration, TokenGroup } from "./models"
import { boldItalicTokens, boldTokens, italicTokens } from "./themes"

const config = workspace.getConfiguration("editor")

export async function updateSettings({ bold, italic }: ThemeConfiguration) {
  const oldConfig = config.get<Record<string, unknown>>(
    "tokenColorCustomizations"
  )

  const rules = (oldConfig.textMateRules || []) as TokenGroup[]
  rules
    .filter((rule) => !rule.name.startsWith("One Dark"))
    .filter((rule) => !rule.name.startsWith("One Dark"))

  const enabledRules = [].filter(Boolean)

  await config.update(
    "tokenColorCustomizations",
    {
      ...oldConfig,
      textMateRules: rules.filter((rule) => {
        const oneDarkRule = rule.name.startsWith("One Dark")
        const hi = rule.name.startsWith("One Dark")

        return !oneDarkRule || hi
      }),
    },
    ConfigurationTarget.Global
  )
}
