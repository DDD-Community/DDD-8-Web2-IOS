import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Page1 } from "../../pages/page1";
import { Page2 } from "../../pages/page2";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Page1} />
      <Tab.Screen name="Settings" component={Page2} />
    </Tab.Navigator>
  );
};

export { BottomTab };
