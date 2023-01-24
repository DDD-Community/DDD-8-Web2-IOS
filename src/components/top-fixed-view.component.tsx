import React, { FC, ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

type Props = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const TopFixedView: FC<Props> = ({ style, children }) => {
  return (
    <View
      style={[
        style,
        { position: "absolute", top: StatusBarHeight, width: "100%" },
      ]}
    >
      {children}
    </View>
  );
};
