import React, { useRef } from "react";
import { WebView } from "react-native-webview";

const MapWebView = () => {
  const ref = useRef();
  return (
    <WebView
      ref={ref as any}
      source={{ uri: "https://ddd-web2-map.web.app" }}
    />
  );
};

export { MapWebView };
