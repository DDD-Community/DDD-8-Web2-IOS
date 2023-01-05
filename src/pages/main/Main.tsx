import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Map } from "../map";
import { My } from "../my";
import { Bookmark } from "../bookmark";
import { Text } from "react-native";
import IconHome from "../../../assets/icon/icon-home.svg";
import IconCalendar from "../../../assets/icon/icon-calendar.svg";
import IconInBox from "../../../assets/icon/icon-inbox.svg";
import IconProfile from "../../../assets/icon/icon-profile.svg";
import { THEME } from "../../constants/theme";

const Tab = createMaterialBottomTabNavigator();

const ROUTE_NAME_ICON_MAP: Record<string, any> = {
  Home: IconHome,
  Calendar: IconCalendar,
  Bookmark: IconInBox,
  Profile: IconProfile,
};

const Main = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#fff",
        height: 78,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const Icon = ROUTE_NAME_ICON_MAP[route.name];
          return <Icon fill={color} />;
        },
      })}
      initialRouteName="Home"
      activeColor={THEME.PRIMARY_BG_COLOR}
      inactiveColor="#666666"
      labeled={false}
    >
      <Tab.Screen name="Home" component={Map} />
      <Tab.Screen name="Calendar" component={Map} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Profile" component={My} />
    </Tab.Navigator>
  );
};

export { Main };
