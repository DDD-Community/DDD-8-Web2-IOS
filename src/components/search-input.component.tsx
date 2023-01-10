import React, { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { TextInput } from "react-native";

type Props = {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};

const SearchInput: FC<Props> = ({ placeholder, style }) => {
  return (
    <View style={style}>
      <View
        style={{
          opacity: 0.8,
          backgroundColor: "#fff",
          borderRadius: 139,
          margin: 16,
        }}
      >
        <TextInput
          placeholder={placeholder}
          style={{
            color: "#666666",
            paddingVertical: 14,
            paddingHorizontal: 21,
          }}
        />
      </View>
    </View>
  );
};

export { SearchInput };
