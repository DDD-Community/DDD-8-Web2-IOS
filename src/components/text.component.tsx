import React, { FC, ComponentProps } from "react";
import { Text as RnText } from "react-native";
import { FontFamily } from "~constants";

type Props = ComponentProps<typeof RnText>;

export const Text: FC<Props> = (props) => {
  return (
    <RnText {...props} style={[{ fontFamily: FontFamily }, props.style]} />
  );
};
