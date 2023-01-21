import { FC } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { View, TouchableHighlight, Text } from "react-native";

type Props = {
  Icon?: FC<any>;
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: { width?: number; height?: number; fill?: string };
};

const DEFAULT_BUTTON_STYLE = {
  display: "flex",
  flexDirection: "row",
  borderRadius: 12,
  paddingVertical: 16,
  justifyContent: "center",
  alignItems: "center",
} as const;

export const Button: FC<Props> = ({
  Icon,
  title,
  style,
  buttonStyle,
  textStyle,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor="transparent"
      style={style}
    >
      <View style={[DEFAULT_BUTTON_STYLE, buttonStyle]}>
        {Icon && (
          <View>
            <Icon {...iconStyle} />
          </View>
        )}
        {title && (
          <View>
            <Text style={[textStyle]}>{title}</Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};
