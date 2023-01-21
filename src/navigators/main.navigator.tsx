import React, { FC } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { My } from "~screens/my";
import { BookmarkScreen } from "~screens/bookmark";
import { THEME } from "~constants";
import { MyTripMapScreen } from "~screens/my-trip";
import { NavigationKey, AppNavigationParamList } from "~types";
import { TabBarIcon } from "~components";
import { HomeMapScreen } from "~screens/home";
import { NavigationProp } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

type Props = {
  navigation: NavigationProp<
    AppNavigationParamList,
    NavigationKey.MainNavigator
  >;
};

export const MainNavigator: FC<Props> = ({ navigation }) => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: THEME.BASE_BG_COLOR,
        height: 78,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <TabBarIcon color={color} name={route.name} />
        ),
      })}
      initialRouteName={NavigationKey.HomeMap}
      activeColor={THEME.PRIMARY_BG_COLOR}
      inactiveColor="#666666"
      labeled={false}
    >
      <Tab.Screen name={NavigationKey.HomeMap} component={HomeMapScreen} />
      <Tab.Screen name={NavigationKey.MyTripMap} component={MyTripMapScreen} />
      <Tab.Screen name={NavigationKey.Bookmark} component={BookmarkScreen} />
      <Tab.Screen name={NavigationKey.Profile} component={My} />
    </Tab.Navigator>
  );
};
