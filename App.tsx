import React, { useEffect, useState } from "react";
import { Router } from "./src/pages/router";
import { RecoilRoot } from "recoil";
import * as SplashScreen from "expo-splash-screen";

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
      <Router />
    </RecoilRoot>
  );
}
