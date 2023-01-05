import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Bookmark = () => {
  return (
    <View style={styles.view}>
      <Text>bookmark hear</Text>
    </View>
  );
};

export { Bookmark };
