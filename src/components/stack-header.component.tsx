import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./stack-header.styles";
import IconLeftArrow from "~assets/icon/icon-left-arrow.svg";
import IconNavClose from "~assets/icon/icon-nav-close.svg";
import { Button } from "./buttons/button.component";

type Props = {
  showGoBack: boolean;
  showClose: boolean;
  onPressGoBack?: () => void;
  onPressClose?: () => void;
  children: ReactNode;
};

export const StackHeader: FC<Props> = ({
  showClose,
  showGoBack,
  onPressClose,
  onPressGoBack,
  children,
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.leftButtonArea}>
        {showGoBack && <Button Icon={IconLeftArrow} onPress={onPressGoBack} />}
      </View>

      <View style={styles.centerArea}>{children}</View>
      <View style={styles.rightButtonArea}>
        {showClose && <Button Icon={IconNavClose} onPress={onPressClose} />}
      </View>
    </View>
  );
};
