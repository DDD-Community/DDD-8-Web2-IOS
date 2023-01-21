export const FontFamily = "Apple SD Gothic Neo";

export const THEME = {
  PRIMARY_BG_COLOR: "#6147FF",
  PRIMARY_TEXT_COLOR: "#fff",
  BASE_BG_COLOR: "#fff",
} as const;

export const HexColor = {
  Primary: "#6147FF",
  Black: "#000000",
  N900: "#b2027",
  N700: "#333C47",
  N500: "#4C5561",
  N200: "#6C7682",
  N90: "#8C95A1",
  N60: "#B1B8C0",
  N50: "#C2C8CF",
  N40: "#DEE1E6",
  N30: "#E9ECEF",
  N20: "#F1F3F5",
  N10: "#F9FAFB",
};

export const BgColor = {
  Primary: "#6147FF",
  InActive: "#F3F3F3",
  Base: "#fff",
} as const;

export const TextColor = {
  Primary: "#fff",
  InActive: "#AAAAAA",
};

export type FontWeightType = typeof FontWeight[keyof typeof FontWeight];

export const FontWeight = {
  Regular: "400",
  Medium: "500",
  SemiBold: "600",
  Bold: "700",
} as const;

export const FontSize = {
  XXXLarge: 28,
  XXLarge: 24,
  XLarge: 20,
  Large: 18,
  Medium: 16,
  Small: 14,
  XSmall: 12,
  XXSmall: 11,
} as const;
