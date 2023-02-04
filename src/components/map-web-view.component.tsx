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
          console.log(type, data);
          webViewRef.current?.postMessage({
            type,
            data,
          });
        },
      }),
      [webViewRef]
    );

    const onMessage = (event: WebViewMessageEvent) => {
      console.log(event);
      if (event.type === "onLoad") {
        console.log("onLoad!!!");
        onLoad?.();
      }
      if (event.type === "markerClick") {
        console.log("markerClick!!!");
        onLoad?.();
      }
      if (event.type === "goLocaionDetail") {
        console.log("goLocaionDetail!!!");
        onLoad?.();
      }
      if (event.type === "showMoreSearchData") {
        console.log("showMoreSearchData!!! ");
        onLoad?.();
      }
    };

    return (
      <WebView
        ref={webViewRef as any}
        javaScriptEnabled
        source={{ uri }}
        onMessage={(e) => {
          onMessage(JSON.parse(e.nativeEvent.data));
        }}
        onError={(e) => console.error(e.nativeEvent)}
      />
    );
  }
);

export { MapWebView };
