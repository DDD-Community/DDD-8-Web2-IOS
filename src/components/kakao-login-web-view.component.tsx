import React from "react";
import { WebView } from "react-native-webview";
import { KAKAO_CLIENT_ID } from "@env";

const AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&response_type=code&redirect_uri=http://127.0.0.1/kakaocallback`;

const KakaoLoginWebView = () => {
  return <WebView source={{ uri: AUTH_URI }} />;
};

export { KakaoLoginWebView };
