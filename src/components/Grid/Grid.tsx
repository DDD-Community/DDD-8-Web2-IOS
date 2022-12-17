import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import { Col } from "./Col";
import { Row } from "./Row";

type Props = {
  children: ReactNode;
};

const Grid: FC<Props> = ({ children }) => {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>{children}</View>
  );
};

export { Grid };
