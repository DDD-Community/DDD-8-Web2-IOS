import React, { FC, ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Constants from "expo-constants";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const BottomFixedView: FC<Props> = ({ style, children }) => {
  return (
    <View style={[style, { position: "absolute", bottom: 0, width: "100%" }]}>
      {children}
    </View>
  );
};
