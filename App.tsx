import React from "react";
import { Router } from "./src/pages/router";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
