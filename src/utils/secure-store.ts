import * as SecureStore from "expo-secure-store";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN";

export const getAccessToken = () => SecureStore.getItemAsync(ACCESS_TOKEN_KEY);

export const setAccessToken = (accessToken: string) =>
  SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);

export const getRefreshToken = () =>
  SecureStore.getItemAsync(REFRESH_TOKEN_KEY);

export const setRefreshToken = (refreshToken: string) =>
  SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
