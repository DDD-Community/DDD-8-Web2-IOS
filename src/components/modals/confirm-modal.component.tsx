import React, { FC } from "react";
import { Modal, View } from "react-native";
import { Button } from "../buttons/button.component";
import { Text } from "../text.component";
import { styles } from "./confirm-model.styles";

type Props = {
  visible: boolean;
  onPressCancel: () => void;
  onPressConfirm: () => void;
};

export const ConfirmModal: FC<Props> = ({
  visible,
  onPressCancel,
  onPressConfirm,
}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.dimView}>
        <View style={styles.contentView}>
          <Text style={styles.messageText}>일정을 삭제할까요?</Text>
          <View style={styles.buttonView}>
            <Button
              title="일정 삭제"
              buttonStyle={styles.removeButton}
              textStyle={styles.removeText}
              onPress={onPressConfirm}
            ></Button>
            <Button
              title="취소"
              buttonStyle={styles.removeButton}
              textStyle={styles.cancelText}
              onPress={onPressCancel}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
