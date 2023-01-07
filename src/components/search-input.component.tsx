import React, { FC } from "react";
import { View } from "react-native";
import { TextInput } from "react-native";

type Props = {
  placeholder?: string;
};

const SearchInput: FC<Props> = ({ placeholder }) => {
  return (
    <View style={{ position: "absolute", top: 20, width: "100%" }}>
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
