import React, { FC, ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./fixed-view.styles";

type Props = {
  type: "top" | "bottom";
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const FixedView: FC<Props> = ({ type, style, children }) => {
  return (
    <View style={[style, type === "bottom" ? styles.bottom : styles.top]}>
      {children}
    </View>
  );
};
