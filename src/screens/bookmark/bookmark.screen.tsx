import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./boolmark.styles";
import { Text, Layout, BookmarkItem } from "~components";
import IconBookmarkBg from "~assets/icon/icon-bookmark-bg.svg";
import { useGetBookmarks } from "~api";

export const BookmarkScreen = () => {
  const [page, setPage] = useState(0);

  const bookmarksQuery = useGetBookmarks({
    page,
    size: 10,
  });
  const emptyBookmarks =
    page === 0 && bookmarksQuery.data?.places?.length === 0;

  return (
    <Layout style={styles.view} safeAreaStyle={{ width: "100%" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitleText}>장소 북마크</Text>
      </View>
      <View style={styles.contentView}>
        {emptyBookmarks ? (
          <>
            <IconBookmarkBg />
            <Text style={styles.emptyText}>장소를 북마크 해보세요!</Text>
          </>
        ) : (
          bookmarksQuery.data?.places?.map((place: object) => {
            <BookmarkItem
              placeName={place.name}
              address={place.detailAddress}
            />;
          })
        )}
      </View>
    </Layout>
  );
};
