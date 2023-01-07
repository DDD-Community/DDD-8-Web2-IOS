export enum NavigationKey {
  LoginNavigator = "LoginNavigator",
  MainNavigator = "MainNavigator",

  LoginMenu = "LoginMenu",
  LoginKakao = "LoginKakao",
  LoginApple = "LoginApple",

  HomeMap = "HomeMap",

  SettingRegion = "SettingRegion",
  SettingDate = "SettingDate",

  MyTripMap = "MyTripMap",
  Bookmark = "Bookmark",
  Profile = "Profile",
}

export type AppNavigationParamList = {
  [NavigationKey.LoginNavigator]: undefined;
  [NavigationKey.MainNavigator]: undefined;
  [NavigationKey.SettingDate]: undefined;
  [NavigationKey.SettingRegion]: undefined;
};

export type LoginNavigationParamList = {
  [NavigationKey.LoginMenu]: undefined;
  [NavigationKey.LoginKakao]: undefined;
  [NavigationKey.LoginApple]: undefined;
  [NavigationKey.MainNavigator]: undefined;
};

export type HomeNavigationParamList = {
  [NavigationKey.HomeMap]: undefined;
  [NavigationKey.SettingRegion]: undefined;
};

export type MainNavigationParamList = {
  [NavigationKey.MyTripMap]: undefined;
  [NavigationKey.Bookmark]: undefined;
  [NavigationKey.Profile]: undefined;
};
