import { NavigationProp } from "@react-navigation/native";
import React, { FC } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MainNavigationParamList, NavigationKey } from "~types";
import { SelectScheduleDay } from "~components";

type Props = {
  navigation: NavigationProp<
    MainNavigationParamList,
    NavigationKey.EditSchedule
  >;
};

export const EditScheduleScreen: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <SelectScheduleDay selectedDay={1} onSelect={() => {}} />
      <TextInput multiline></TextInput>
    </View>
  );
};
