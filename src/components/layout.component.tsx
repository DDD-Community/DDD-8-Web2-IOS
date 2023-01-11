import React, { FC, ReactNode } from "react";
import Constants from "expo-constants";
import {
  StyleProp,
  View,
  ViewStyle,
  StatusBar,
  SafeAreaView,
} from "react-native";

const StatusBarHeight = Constants.statusBarHeight;

type StatusBarLayoutOptions = {
  /**
   * Status Bar 영역 보여줄지 말지 여부
   */
  show?: boolean;
  /**
   * Status Bar 배경색
   */
  backgroundColor?: string;
};

type Props = {
  style?: StyleProp<ViewStyle>;
  statusBarLayoutOptions?: StatusBarLayoutOptions;
  safeAreaStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ style, children, safeAreaStyle }) => {
  return (
    <View
      style={[
        {
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        },
        style,
      ]}
    >
      <SafeAreaView style={safeAreaStyle}>{children}</SafeAreaView>
    </View>
  );
};
