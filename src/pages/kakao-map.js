import { WebView } from "react-native-webview";

const KakaoMap = () => {
  return <WebView source={{ uri: "http://localhost:8080" }} />;
};

export { KakaoMap };
