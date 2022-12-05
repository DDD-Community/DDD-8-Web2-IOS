import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Map = () => {
  return (
    <View style={styles.view}>
      <Text>Map Here</Text>
    </View>
  );
};

export { Map };
