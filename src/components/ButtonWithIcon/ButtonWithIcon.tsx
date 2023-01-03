import { ComponentProps, ComponentType, FC } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";

type Props = {
  Icon: FC<any>;
  title: string;
  onPress: () => void;
  backgroundColor: string;
  titleColor: string;
};

const ButtonWithIcon: FC<Props> = ({
  Icon,
  title,
  backgroundColor,
  titleColor,
  onPress,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor="transparent"
    >
      <View
        style={{
          backgroundColor,
          minWidth: 334,
          display: "flex",
          flexDirection: "row",
          borderRadius: 12,
          paddingVertical: 16,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 6,
        }}
      >
        <View>
          <Icon />
        </View>
        <View>
          <Text style={{ color: titleColor, fontSize: 16 }}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export { ButtonWithIcon };
