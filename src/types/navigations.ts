export enum NavigationKey {
  LoginNavigator = "LoginNavigator",
  MainNavigator = "MainNavigator",

  LoginMenu = "LoginMenu",
  LoginKakao = "LoginKakao",
  LoginApple = "LoginApple",

  Main = "Main",
  Search = "Search",

  SettingRegion = "SettingRegion",
  SettingDate = "SettingDate",

  MyTripMap = "MyTripMap",
  Bookmark = "Bookmark",
  Profile = "Profile",
  SearchResultMap = "SearchResultMap",
  SearchResultList = "SearchResultList",
  SearchResultDetail = "SearchResultDetail",
}

export type AppNavigationParamList = {
  [NavigationKey.LoginNavigator]: undefined;
  [NavigationKey.MainNavigator]: undefined;
  [NavigationKey.SettingDate]: {
    region: string;
  };
  [NavigationKey.SettingRegion]: undefined;
  [NavigationKey.SearchResultDetail]: undefined;
};

export type LoginNavigationParamList = {
  [NavigationKey.LoginMenu]: undefined;
  [NavigationKey.LoginKakao]: undefined;
  [NavigationKey.LoginApple]: undefined;
  [NavigationKey.MainNavigator]: undefined;
};

export type HomeNavigationParamList = {
  [NavigationKey.Main]: undefined;
  [NavigationKey.SettingRegion]: undefined;
};

export type MainNavigationParamList = {
  [NavigationKey.MyTripMap]: undefined;
  [NavigationKey.Bookmark]: undefined;
  [NavigationKey.Profile]: undefined;
  [NavigationKey.SearchResultMap]: undefined;
  [NavigationKey.SearchResultList]: undefined;
  [NavigationKey.SearchResultDetail]: undefined;
  [NavigationKey.SettingRegion]: undefined;
};
