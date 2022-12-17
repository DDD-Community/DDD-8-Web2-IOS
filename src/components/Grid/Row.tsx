import React, { FC, ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
};

export const Row: FC<Props> = ({ children }) => {
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
