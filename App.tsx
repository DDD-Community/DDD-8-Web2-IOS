import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import { AppNavigator } from "~navigators/app.navigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  );
}
