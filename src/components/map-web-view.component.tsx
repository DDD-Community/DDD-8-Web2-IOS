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
  showMore?: () => void;
};

const MapWebView = forwardRef<MapWebViewHandle, Props>(
  ({ onLoad, uri, showMore }, forwardedRef) => {
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
        console.log(
          "goLocaionDetail!!! 장소상세 api호출해서 web에 다시 전달 필요"
        );
        onLoad?.();
      }
      if (event.type === "OnResPlacesSearch") {
        console.log("OnResPlacesSearch!!!");
        // onLoad?.();
      }
      if (event.type === "showMoreSearchData") {
        console.log("showMoreSearchData!!!");
        showMore?.();
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
