import React, { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { TextInput } from "react-native";
import IconSearchInput from "~assets/icon/icon-search-input.svg";
import IconSearchCancel from "~assets/icon/icon-search-cancel.svg";
import { FontFamily } from "~constants";
import { Button } from "./buttons/button.component";
import { styles } from "./search-input.styles";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  onSubmitEditing?: () => void;
  onPress?: () => void;
  onPressCancel?: () => void;
};

const SearchInput: FC<Props> = ({
  placeholder,
  value,
  onSubmitEditing,
  onChangeText,
  onPress,
  onPressCancel,
}) => {
  return (
    <View style={styles.innerView}>
      <IconSearchInput />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#666"}
        style={{
          color: "#000",
          width: "100%",
          fontFamily: FontFamily,
          flex: 1,
        }}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onPressIn={onPress}
      />
      <Button Icon={IconSearchCancel} onPress={onPressCancel}></Button>
    </View>
  );
};

export { SearchInput };
