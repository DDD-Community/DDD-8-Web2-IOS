import React, { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { TextInput } from "react-native";
import IconSearch from "~assets/icon/icon-search.svg";
import { FontFamily } from "~constants";

type Props = {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  onChangeText?: (value: string) => void;
  onSumbitEditing?: () => void;
};

const SearchInput: FC<Props> = ({
  placeholder,
  style,
  value,
  onSumbitEditing,
  onChangeText,
}) => {
  return (
    <View style={style}>
      <View
        style={{
          opacity: 0.8,
          backgroundColor: "#fff",
          borderRadius: 139,
          margin: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#666"}
          style={{
            color: "#000",
            paddingVertical: 14,
            paddingHorizontal: 21,
            width: "100%",
            fontFamily: FontFamily,
          }}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSumbitEditing}
        />
        <View style={{ width: 18, height: 18, margin: 16, marginLeft: "auto" }}>
          <IconSearch height={18} />
        </View>
      </View>
    </View>
  );
};

export { SearchInput };
