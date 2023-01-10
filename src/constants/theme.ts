export const FontFamily = "Apple SD Gothic Neo";

export const THEME = {
  PRIMARY_BG_COLOR: "#6147FF",
  PRIMARY_TEXT_COLOR: "#fff",
  BASE_BG_COLOR: "#fff",
} as const;

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
  XXLarge: 24,
  XLarge: 20,
  Large: 18,
  Medium: 16,
  Small: 14,
  XSmall: 12,
  XXSmall: 11,
} as const;
