import React, { FC, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { TextInput } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
});

type Props = {
  navigation: NavigationProp<RootStackPramList, "SettingRegion">;
};

const SettingRegion: FC<Props> = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.view}>
      <Text>라트립은 현재 국내여행 중</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="국내 지역 검색"
        onSubmitEditing={() => {
          navigation.navigate("SettingDate");
        }}
      />
      <Text>추천 여행지</Text>
    </View>
  );
};

export { SettingRegion };
