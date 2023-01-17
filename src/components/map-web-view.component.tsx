import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { WebView } from "react-native-webview";
import { MessageType } from "../types/messages";
import { MAP_WEB_URL } from "@env";
import { WebViewRef } from "~types";

export type MapWebViewHandle = {
  postMessage(type: MessageType, data: unknown): void;
};

type Props = {};

const MapWebView = forwardRef<MapWebViewHandle, Props>(
  (props, forwardedRef) => {
    const webViewRef = useRef<WebViewRef>();
    const webData = async (message: any) => {
      const { nativeEvent } = message;
      const req = nativeEvent.data && JSON.parse(nativeEvent.data);
      alert(req.title + req.lat + req.lng);
      // await onMessage(req);
    };
    useImperativeHandle(
      forwardedRef,
      () => ({
        postMessage(type: MessageType, data: unknown) {
          webViewRef.current?.postMessage({
            type,
            data,
          });
        },
      }),
      [webViewRef]
    );

    return (
      <WebView
        ref={webViewRef as any}
        javaScriptEnabled
        source={{ uri: MAP_WEB_URL }}
        onMessage={webData}
      />
    );
  }
);

export { MapWebView };
