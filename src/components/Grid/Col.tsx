import React, { FC, ReactNode } from "react";
import { ColorValue, StyleProp, TouchableOpacity, View } from "react-native";

type Props = {
  children: ReactNode;
  borderColor?: ColorValue;
  borderWidth?: number;
  height?: number;
  onPress?: () => void;
};

export const Col: FC<Props> = ({
  children,
  borderColor,
  borderWidth,
  height,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        margin: 1,
        borderColor,
        borderWidth,
        height,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
