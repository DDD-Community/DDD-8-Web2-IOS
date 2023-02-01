import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { MessageType } from "../types/messages";
import { MAP_WEB_URL } from "@env";
import { WebViewRef } from "~types";

export type MapWebViewHandle = {
  postMessage(type: MessageType, data: unknown): void;
};

type Props = {
  onLoad?: () => void;
  uri: string;
};

const MapWebView = forwardRef<MapWebViewHandle, Props>(
  ({ onLoad, uri }, forwardedRef) => {
    const webViewRef = useRef<WebViewRef>();

    useImperativeHandle(
      forwardedRef,
      () => ({
        postMessage(type: MessageType, data: unknown) {
          console.log("post messeage", type, data);
          webViewRef.current?.postMessage({
            type,
            data,
          });
        },
      }),
      [webViewRef]
    );

    const onMessage = (event: WebViewMessageEvent) => {
      console.log("map message", event.nativeEvent.data);
      if (event.nativeEvent.data === "onLoad") {
        console.log("onLoad!!!");
        onLoad?.();
      }
    };

    return (
      <WebView
        ref={webViewRef as any}
        javaScriptEnabled
        source={{ uri }}
        onMessage={onMessage}
        onError={(e) => console.error(e.nativeEvent)}
      />
    );
  }
);

export { MapWebView };
