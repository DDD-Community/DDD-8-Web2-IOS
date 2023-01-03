import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Map } from "../map";
import { My } from "../my";

const Tab = createMaterialBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="1" component={Map} />
      <Tab.Screen name="2" component={My} />
      <Tab.Screen name="3" component={My} />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  );
};

export { Main };
