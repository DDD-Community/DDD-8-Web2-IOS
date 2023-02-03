import { FC } from "react";
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import { styles } from "./button.styles";

type Props = {
  Icon?: FC<any>;
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: { width?: number; height?: number; fill?: string };
};

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
      <View style={[styles.default, buttonStyle]}>
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
