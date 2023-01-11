import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SafeAreaLayout: FC<Props> = ({ children }) => {
  return <SafeAreaLayout>{children}</SafeAreaLayout>;
};
