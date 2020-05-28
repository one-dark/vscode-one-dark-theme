import { FontStyle, TokenGroup } from "../../models";

export const italicAttributesTokens: TokenGroup[] = [
  {
    name: "Italic",
    scope: ["entity.other.attribute-name"],
    settings: {
      fontStyle: FontStyle.Italics,
    },
  },
];
