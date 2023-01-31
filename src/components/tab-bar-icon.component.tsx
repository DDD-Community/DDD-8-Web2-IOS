import React, { ComponentType, FC } from "react";
import { NavigationKey } from "~types";
import IconHome from "~assets/icon/icon-home.svg";
import IconCalendar from "~assets/icon/icon-calendar.svg";
import IconInBox from "~assets/icon/icon-inbox.svg";
import IconProfile from "~assets/icon/icon-profile.svg";

type Props = {
  name: string;
  color: string;
};

const ICON_MAP: Record<string, ComponentType<any>> = {
  [NavigationKey.Main]: IconHome,
  [NavigationKey.MyTripMap]: IconCalendar,
  [NavigationKey.Bookmark]: IconInBox,
  [NavigationKey.Profile]: IconProfile,
};

export const TabBarIcon: FC<Props> = ({ name, color }) => {
  const Icon = ICON_MAP[name];
  return <Icon fill={color} />;
};
