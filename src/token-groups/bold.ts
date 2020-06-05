import { TokenGroup } from "../models"

export const boldTokens: TokenGroup[] = [
  {
    name: "One Dark bold",
    scope: [
      "entity.name.function",
      "entity.name.type.class",
      "entity.name.type.module",
      "entity.name.type.namespace",
      "keyword.other.important",
    ],
    settings: {
      fontStyle: "bold",
    },
  },
]
