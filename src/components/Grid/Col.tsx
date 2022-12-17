import React, { FC, ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
};

export const Col: FC<Props> = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", margin: 1 }}>
      {children}
    </View>
  );
};
