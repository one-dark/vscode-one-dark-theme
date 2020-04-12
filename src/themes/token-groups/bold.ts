import { FontStyle } from "../../models";
import { TokenGroup } from "../../models/tokens";

export const boldTokens: TokenGroup[] = [
  {
    name: "Bold",
    scope: [
      "entity.name.function",
      "entity.name.type.class",
      "entity.name.type.module",
      "entity.name.type.namespace",
      "keyword.other.important"
    ],
    settings: {
      fontStyle: FontStyle.Bold,
    },
  },
]
