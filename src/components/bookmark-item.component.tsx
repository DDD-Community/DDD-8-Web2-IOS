import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "./text.component";
import { Button } from "./button.component";
import { styles } from "./bookmark-item.styles";
import { HexColor } from "~constants";
import IconBookmark from "~assets/icon/icon-bookmark.svg";

type Props = {
  placeName: string;
  address: string;
};

export const BookmarkItem: FC<Props> = ({ placeName, address }) => {
  return (
    <View style={styles.view}>
      <View style={styles.textView}>
        <Text style={styles.placeName}>{placeName}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <Button
        style={styles.bookmarkButton}
        Icon={() => <IconBookmark fill={HexColor.Primary} />}
      />
    </View>
  );
};
