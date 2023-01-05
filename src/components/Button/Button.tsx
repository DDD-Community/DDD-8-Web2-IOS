import { ComponentProps, FC } from "react";
import { View, TouchableHighlight, Text } from "react-native";
import { DEFAULT_PROPS } from "./constants";

type Props = {
  Icon?: FC<any>;
  title: string;
  onPress: () => void;
  buttonStyle?: {
    backgroundColor: string;
    color: string;
    width?: number | string;
    minWidth?: number;
    maxWidth?: number;
    shadowColor?: string;
    shadowOffset?: {
      width: number;
      height: number;
    };
  };
};

const Button: FC<Props> = ({ Icon, title, buttonStyle, onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor="transparent"
    >
      <View
        style={{
          ...buttonStyle,
          display: "flex",
          flexDirection: "row",
          borderRadius: 12,
          paddingVertical: 16,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 6,
          shadowRadius: 10,
          shadowOpacity: 0.2,
        }}
      >
        {Icon && (
          <View>
            <Icon />
          </View>
        )}
        <View>
          <Text style={{ color: buttonStyle?.color, fontSize: 16 }}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export { Button };
