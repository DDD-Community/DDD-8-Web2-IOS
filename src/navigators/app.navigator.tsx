import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigator } from "./main.navigator";
import { LoginNavigator } from "./login.navigator";
import { SettingDateScreen, SettingRegionScreen } from "~screens/setting";
import {
  SearchResultMapScreen,
  SearchResultDetailScreen,
} from "~screens/my-trip";
import { NavigationKey } from "~types";
import { SearchScreen } from "~screens/home";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={NavigationKey.LoginNavigator}
          component={LoginNavigator}
        />
        <Stack.Screen
          name={NavigationKey.MainNavigator}
          component={MainNavigator}
        />
        <Stack.Screen
          name={NavigationKey.SettingDate}
          component={SettingDateScreen}
          initialParams={{ region: "" }}
        />
        <Stack.Screen
          name={NavigationKey.SettingRegion}
          component={SettingRegionScreen}
        />
        <Stack.Screen
          name={NavigationKey.SearchResultMap}
          component={SearchResultMapScreen}
        />
        <Stack.Screen
          name={NavigationKey.SearchResultDetail}
          component={SearchResultDetailScreen}
        />
        <Stack.Screen name={NavigationKey.Search} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };
