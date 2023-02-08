import React, { FC, ReactNode } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";

type Props = {
  children: ReactNode;
};

export const Grid: FC<Props> = ({ children }) => {
  return (
    <View
      style={{ display: "flex", flexDirection: "column", paddingBottom: 80 }}
    >
      {children}
    </View>
  );
};

type ColProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const Col: FC<ColProps> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        {
          flex: 1,
          alignItems: "center",
          overflow: "hidden",
          justifyContent: "center",
        },
        style,
      ]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

type RowProps = {
  children: ReactNode;
};

export const Row: FC<RowProps> = ({ children }) => {
  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </View>
  );
};
