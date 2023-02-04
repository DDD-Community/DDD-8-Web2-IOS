import React, { FC, Suspense } from "react";
import { NavigationProp } from "@react-navigation/native";
import { MainNavigationParamList, NavigationKey } from "~types";
import { MyTripMapScreenView } from "./map.view";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

export const MyTripMapScreen: FC<Props> = ({ navigation }) => {
  return (
    <Suspense>
      <MyTripMapScreenView navigation={navigation} />
    </Suspense>
  );
};
