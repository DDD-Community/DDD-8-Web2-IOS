import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigator } from "./main.navigator";
import { LoginNavigator } from "./login.navigator";
import { SettingDateScreen, SettingRegionScreen } from "~screens/setting";
import { NavigationKey } from "~types";

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
        />
        <Stack.Screen
          name={NavigationKey.SettingRegion}
          component={SettingRegionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };
