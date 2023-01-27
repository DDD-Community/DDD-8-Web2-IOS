import React from "react";
import { View } from "react-native";
import { styles } from "./boolmark.styles";
import { Text, Layout } from "~components";
import IconBookmarkBg from "~assets/icon/icon-bookmark-bg.svg";

export const BookmarkScreen = () => {
  return (
    <Layout style={styles.view} safeAreaStyle={{ width: "100%" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitleText}>장소 북마크</Text>
      </View>
      <View style={styles.contentView}>
        <IconBookmarkBg />
        <Text style={styles.emptyText}>장소를 북마크 해보세요!</Text>
      </View>
    </Layout>
  );
};
