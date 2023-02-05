import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { MessageType, ReceivedMessageType } from "../types/messages";
import { MAP_WEB_URL } from "@env";
import { WebViewRef } from "~types";

export type MapWebViewHandle = {
  postMessage(type: MessageType, data: unknown): void;
};

type Props = {
  onLoad?: () => void;
  uri: string;
  onMessage?: (type: string, data: any) => void;
};

export const MapWebView = forwardRef<MapWebViewHandle, Props>(
  ({ onLoad, uri, onMessage }, forwardedRef) => {
    const webViewRef = useRef<WebViewRef>();

    useImperativeHandle(
      forwardedRef,
      () => ({
        postMessage(type: MessageType, data: unknown) {
          console.log(type, data);
          webViewRef.current?.postMessage({
            type,
            data,
          });
        },
      }),
      [webViewRef]
    );

    const handleOnMessage = (data: { type: string; data: any }) => {
      if (data && typeof data === "object" && typeof data.type === "string") {
        if (data.type === ReceivedMessageType.OnLoad) {
          onLoad?.();
          return;
        }
        onMessage?.(data.type, data.data);
      }
    };

    return (
      <WebView
        ref={webViewRef as any}
        javaScriptEnabled
        source={{ uri }}
        onMessage={(e) => {
          handleOnMessage(JSON.parse(e.nativeEvent.data));
        }}
        onError={(e) => console.error(e.nativeEvent)}
      />
    );
  }
);
