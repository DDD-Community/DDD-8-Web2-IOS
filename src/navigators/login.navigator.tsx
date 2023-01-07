import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginKakaoScreen,
  LoginMenuScreen,
  LoginAppleScreen,
} from "~screens/login";
import { NavigationKey } from "~types";

const RootStack = createStackNavigator();

const rootScreenOptions = { headerShown: false };

const LoginNavigator: FC = () => {
  return (
    <RootStack.Navigator screenOptions={rootScreenOptions}>
      <RootStack.Group>
        <RootStack.Screen
          name={NavigationKey.LoginMenu}
          component={LoginMenuScreen}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name={NavigationKey.LoginKakao}
          component={LoginKakaoScreen}
        />
        <RootStack.Screen
          name={NavigationKey.LoginApple}
          component={LoginAppleScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export { LoginNavigator };
