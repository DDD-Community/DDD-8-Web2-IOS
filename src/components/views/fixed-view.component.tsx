import React, { FC, ReactNode } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { styles } from "./fixed-view.styles";

type Props = {
  type: "top" | "bottom";
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onLayout?: ViewProps["onLayout"];
};

export const FixedView: FC<Props> = ({ type, style, children, onLayout }) => {
  return (
    <View
      style={[style, type === "bottom" ? styles.bottom : styles.top]}
      onLayout={onLayout}
    >
      {children}
    </View>
  );
};
