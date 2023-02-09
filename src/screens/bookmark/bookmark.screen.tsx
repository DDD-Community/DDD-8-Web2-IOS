import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./boolmark.styles";
import { Text, Layout, BookmarkItem, CategoryTabs } from "~components";
import IconBookmarkBg from "~assets/icon/icon-bookmark-bg.svg";
import {
  FetchBookmarksResponse,
  useBookmarkAction,
  useGetInifiniteBookmarks,
} from "~api";
import { Category } from "~constants";

export const BookmarkScreen = () => {
  const [category, setCategory] = useState<"all" | Category>("all");
  const bookmarksQuery = useGetInifiniteBookmarks({
    size: 5,
    category: category === "all" ? undefined : category,
  });
  const [localBookmarksMap, setLocalBookmarksMap] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    bookmarksQuery.refetch();
  }, [category]);

  const isLoading = bookmarksQuery.isFetching;

  const bookmarks = bookmarksQuery.data?.pages.flatMap((p) => p.places) || [];
  const { toggle } = useBookmarkAction();

  const onPressBookmark = useCallback(
    async (params: { id: string; isBookmarked: boolean }) => {
      await toggle({ placeId: params.id }, false);
      setLocalBookmarksMap((prev) => ({
        ...prev,
        [params.id]: !params.isBookmarked,
      }));
    },
    [localBookmarksMap, toggle]
  );

  const renderBookmarkItem = useCallback(
    ({ item }: { item: FetchBookmarksResponse["places"][number] }) => {
      return (
        <BookmarkItem
          key={item.id}
          placeName={item.name}
          address={item.detailAddress}
          id={item.id}
          isBookmarked={localBookmarksMap[item.id] !== false}
          onPressBookmark={onPressBookmark}
        />
      );
    },
    [onPressBookmark, localBookmarksMap]
  );

  return (
    <Layout style={styles.view} safeAreaStyle={{ width: "100%" }}>
      <View style={styles.header}>
        <Text style={styles.title}>장소 북마크</Text>
      </View>
      <CategoryTabs value={category} onPress={setCategory} />
      <View
        style={[
          styles.contentView,
          bookmarks.length === 0 && styles.contentViewEmpty,
        ]}
      >
        {!isLoading && (
          <FlatList
            data={bookmarks}
            style={{
              flex: 1,
              paddingVertical: 16,
              marginBottom: 16,
            }}
            contentContainerStyle={{
              height: "100%",
            }}
            renderItem={renderBookmarkItem}
            keyExtractor={(item) => item.id}
            onEndReached={() => {
              if (bookmarksQuery.hasNextPage) {
                bookmarksQuery.fetchNextPage();
              }
            }}
            ListEmptyComponent={() => (
              <View
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconBookmarkBg />
                <Text style={styles.emptyText}>장소를 북마크 해보세요!</Text>
              </View>
            )}
            onEndReachedThreshold={0.4}
          />
        )}
      </View>
    </Layout>
  );
};
