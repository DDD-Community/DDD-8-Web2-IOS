import React, { FC } from "react";
import { NavigationProp } from "@react-navigation/native";
import { MainNavigationParamList, NavigationKey } from "~types";
import { Layout, Text } from "~components";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

export const SearchResultListScreen: FC<Props> = ({}) => {
  return <Layout></Layout>;
};
