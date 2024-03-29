declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "@env" {
  export const KAKAO_CLIENT_ID: string;
  export const API_BASE_URL: string;
  export const MAP_WEB_URL: string;
}
