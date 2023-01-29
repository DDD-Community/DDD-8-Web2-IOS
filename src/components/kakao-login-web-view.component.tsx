import React, { FC } from "react";
import { WebView } from "react-native-webview";
import { KAKAO_CLIENT_ID, API_BASE_URL } from "@env";

const RETURN_URI = `${API_BASE_URL}/v1/auth/signin/kakao`;
const AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&response_type=code&response_type=code&redirect_uri=${RETURN_URI}`;

const HIDE_BODY_SCRIPTS = "document.body.style.display='none';";

const SCRIPTS = `
  const href = window.location.href;
  if (href.indexOf("${RETURN_URI}") === 0) {
    ${HIDE_BODY_SCRIPTS}
    window.ReactNativeWebView.postMessage(document.body.textContent);
  }
`;

type Props = {
  onLoginSuccess: (data: {
    userId: string;
    token: { accessToken: string; refreshToken: string };
  }) => void;
};

const KakaoLoginWebView: FC<Props> = ({ onLoginSuccess }) => {
  return (
    <WebView
      source={{ uri: AUTH_URI }}
      injectedJavaScriptBeforeContentLoaded={HIDE_BODY_SCRIPTS}
      injectedJavaScript={SCRIPTS}
      onMessage={(e) => {
        onLoginSuccess(JSON.parse(e.nativeEvent.data));
      }}
      onHttpError={(e) => {
        console.error(e.nativeEvent.title, e.nativeEvent.description);
      }}
    />
  );
};

export { KakaoLoginWebView };
