import { MAP_WEB_URL } from "@env";
import React, { FC, useEffect, useRef, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { dayScheduleQuery } from "~stores/plan";
import { MessageType } from "../../types/messages";
import { MapWebView, MapWebViewHandle } from "./map-web-view.component";

type Props = {
  day: number;
};

const URI = `${MAP_WEB_URL}/schedule`;

export const ScheduleMapWebView: FC<Props> = ({ day }) => {
  const webViewRef = useRef<MapWebViewHandle>(null);
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const lodableDaySchedule = useRecoilValueLoadable(dayScheduleQuery(day));

  useEffect(() => {
    if (lodableDaySchedule.state === "hasValue") {
      webViewRef.current?.postMessage(
        MessageType.OnResDaySchedulePlaces,
        lodableDaySchedule.contents
      );
    }
  }, [webViewLoaded, lodableDaySchedule]);

  return (
    <MapWebView
      ref={webViewRef}
      uri={URI}
      onLoad={() => setWebViewLoaded(true)}
    />
  );
};
