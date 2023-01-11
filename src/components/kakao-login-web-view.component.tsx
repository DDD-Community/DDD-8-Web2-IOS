import React from "react";
import { WebView } from "react-native-webview";
import { KAKAO_CLIENT_ID } from "@env";

const RETURN_URI = "http://ratrip.kro.kr/v1/auth/signin/kakao";
const AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&response_type=code&response_type=code&redirect_uri=${RETURN_URI}`;

const SCRIPTS = `
  const href = window.location.href;
  if (href.indexOf("${RETURN_URI}") === 0) {
    window.ReactNativeWebView.postMessage(document.body.textContent);
  }
`;

const KakaoLoginWebView = () => {
  return (
    <WebView
      source={{ uri: AUTH_URI }}
      injectedJavaScript={SCRIPTS}
      onMessage={(e) => console.log(e.nativeEvent.data)}
    />
  );
};

export { KakaoLoginWebView };
