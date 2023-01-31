import { API_BASE_URL } from "@env";
import axios from "axios";
import React from "react";
import { styles } from "./my.styles";
import { View, Text, StyleSheet } from "react-native";
import { Button, Layout } from "~components";
import { authedClient } from "../../api/clients";
import { getAccessToken, getRefreshToken } from "~utils/secure-store";
import IconMarker from "~assets/icon/icon-marker.svg";

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

// const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

const My = () => {
  return (
    <Layout style={styles.view} safeAreaStyle={{ width: "100%" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitleText}>마이페이지</Text>
      </View>
      <View style={styles.iconMarker}>
        <IconMarker />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.userInfo}>
          김트립님 안녕하세요 😊{"\n"}
          반짝이는 하루 보내세요✨
        </Text>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listText}>내 작성 일정</Text>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listText}>공지사항</Text>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listText}>회원정보 수정</Text>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listText}>설정</Text>
      </View>
    </Layout>
  );
};

export { My };
