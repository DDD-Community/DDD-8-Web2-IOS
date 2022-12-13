import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./login";
import { Main } from "./main";
import { SettingRegion } from "./setting-region";
import { SettingDate } from "./setting-date";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SettingRegion" component={SettingRegion} />
        <Stack.Screen name="SettingDate" component={SettingDate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Router };
