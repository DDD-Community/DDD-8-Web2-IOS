import { API_BASE_URL } from "@env";
import axios from "axios";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "~components";
import { authedClient } from "../../api/clients";
import { getAccessToken, getRefreshToken } from "~utils/secure-store";

export const logout = async () => {
  const accessToken = await getAccessToken();
  const refreshToken = await getRefreshToken();
  console.log(accessToken, refreshToken);
  return authedClient
    .post(`/v1/auth/auth/signout`, {
      accessToken,
      refreshToken,
    })
    .then((e) => {
      console.log(e.data);
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      authedClient.get("v1/notifications").then((r) => console.log(r.data));
    });
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const My = () => {
  return (
    <View style={styles.view}>
      <Text>My Here</Text>
      <Button
        title="logout"
        onPress={() => {
          logout();
        }}
      ></Button>
    </View>
  );
};

export { My };
