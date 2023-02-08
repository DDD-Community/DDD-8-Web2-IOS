import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./boolmark.styles";
import { Text, Layout, BookmarkItem, CategoryTabs } from "~components";
import IconBookmarkBg from "~assets/icon/icon-bookmark-bg.svg";
import { FetchBookmarksResponse, useGetBookmarks } from "~api";
import { Category } from "~constants";

const renderBookmarkItem = ({
  item,
}: {
  item: FetchBookmarksResponse["places"][number];
}) => {
  return (
    <BookmarkItem
      key={item.id}
      placeName={item.name}
      address={item.detailAddress}
    />
  );
};

export const BookmarkScreen = () => {
  const [category, setCategory] = useState<"all" | Category>("all");
  const [page, setPage] = useState(0);

  const bookmarksQuery = useGetBookmarks({
    page,
    size: 10,
    category: category === "all" ? undefined : category,
  });

  useEffect(() => {
    bookmarksQuery.refetch();
  }, [category]);

  const isBookmarksEmpty =
    page === 0 && bookmarksQuery.data?.places?.length === 0;
  const isLoading = bookmarksQuery.isFetching;
  const bookmarks = bookmarksQuery.data?.places || [];

  return (
    <Layout style={styles.view} safeAreaStyle={{ width: "100%" }}>
      <View style={styles.header}>
        <Text style={styles.title}>장소 북마크</Text>
      </View>
      <CategoryTabs value={category} onPress={setCategory} />
      <View
        style={[
          styles.contentView,
          isBookmarksEmpty && styles.contentViewEmpty,
        ]}
      >
        {!isLoading && isBookmarksEmpty && (
          <>
            <IconBookmarkBg />
            <Text style={styles.emptyText}>장소를 북마크 해보세요!</Text>
          </>
        )}
        {!isLoading && !isBookmarksEmpty && (
          <FlatList
            data={bookmarks}
            renderItem={renderBookmarkItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </Layout>
  );
};
