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

type Props = {
  title: string;
  category?: string;
  memo?: string;
  onLongPress?: any;
};

export const PlaceItem: FC<Props> = ({
  title,
  category,
  memo,
  onLongPress,
}) => {
  return (
    <ScaleDecorator>
      <TouchableOpacity onLongPress={onLongPress}>
        <View style={styles.view}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text>{memo}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};
