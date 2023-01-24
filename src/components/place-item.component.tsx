import React, { FC } from "react";
import {
  GestureResponderEvent,
  GestureResponderHandlers,
  View,
} from "react-native";
import { Text } from "./text.component";
import { styles } from "./place-item.styles";
import { ScaleDecorator } from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconDragButton from "~assets/icon/icon-drag-button.svg";
import { Button } from "./button.component";
type Props = {
  title: string;
  category?: string;
  memo?: string;
  onLongPress?: any;
  onPressEdit?: () => void;
};

export const PlaceItem: FC<Props> = ({
  title,
  category,
  memo,
  onLongPress,
  onPressEdit,
}) => {
  return (
    <ScaleDecorator>
      <View style={styles.view}>
        <TouchableOpacity onLongPress={onLongPress}>
          <IconDragButton />
        </TouchableOpacity>
        <View style={styles.placeInfoView}>
          <View style={styles.placeInfoDetailView}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text>{category}</Text>
            </View>
            <View>
              <Text>{memo}</Text>
            </View>
          </View>
          <Button
            title="수정"
            onPress={onPressEdit}
            textStyle={styles.editButtonText}
          ></Button>
        </View>
      </View>
    </ScaleDecorator>
  );
};
