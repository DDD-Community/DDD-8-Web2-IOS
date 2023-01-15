import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
// import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import { AppNavigator } from "~navigators/app.navigator";
import { Splash } from "./src/components/splash.component";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Splash
          visible={splashVisible}
          onFinish={() => setSplashVisible(false)}
        />
        <AppNavigator />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
