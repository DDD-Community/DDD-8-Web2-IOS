import React, { useRef } from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

const MapWebView = () => {
  const ref = useRef();
  return (
    <View style={styles.container}>
      <WebView
        ref={ref as any}
        source={{ uri: "https://ddd-web2-map.web.app" }}
      />
    </View>
  );
};

export { MapWebView };
