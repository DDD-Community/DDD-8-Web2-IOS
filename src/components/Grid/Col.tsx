import React, { FC, ReactNode } from "react";
import { ColorValue, StyleProp, TouchableOpacity, View } from "react-native";

type Props = {
  children: ReactNode;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
  margin?: string | number;
  height?: number;
  onPress?: () => void;
};

export const Col: FC<Props> = ({
  children,
  borderColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  margin,
  height,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        borderColor,
        borderWidth,
        margin,
        borderRadius,
        backgroundColor,
        height,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
