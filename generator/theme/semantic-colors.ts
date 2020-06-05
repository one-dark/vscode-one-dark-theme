import { Colors } from "../models"

export function getSemanticTokenColors(colors: Colors) {
  return {
    enumMember: colors.whiskey,
    property: colors.coral,
  }
}
