import React, { FC, ReactNode } from "react";
import Constants from "expo-constants";
import { StyleProp, View, ViewStyle } from "react-native";

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
  children?: ReactNode;
};

export const Layout: FC<Props> = ({
  style,
  statusBarLayoutOptions,
  children,
}) => {
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
      {(statusBarLayoutOptions?.show ?? true) && (
        <View
          style={{
            width: "100%",
            height: StatusBarHeight,
            backgroundColor: statusBarLayoutOptions?.backgroundColor || "#fff",
          }}
        />
      )}
      {children}
    </View>
  );
};
