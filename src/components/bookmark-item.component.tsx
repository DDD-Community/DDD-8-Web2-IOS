import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "./text.component";
import { Button } from "./buttons/button.component";
import { styles } from "./bookmark-item.styles";
import { HexColor } from "~constants";
import IconBookmark from "~assets/icon/icon-bookmark.svg";

type Props = {
  id: string;
  placeName: string;
  address: string;
  isBookmarked?: boolean;
  onPressBookmark: (params: { id: string; isBookmarked: boolean }) => void;
};

export const BookmarkItem: FC<Props> = ({
  id,
  placeName,
  address,
  isBookmarked = true,
  onPressBookmark,
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.textView}>
        <Text style={styles.placeName}>{placeName}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <Button
        style={styles.bookmarkButton}
        onPress={() => {
          onPressBookmark({ id, isBookmarked });
        }}
        Icon={() => (
          <IconBookmark fill={isBookmarked ? HexColor.Primary : HexColor.N40} />
        )}
      />
    </View>
  );
};
