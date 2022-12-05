import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    </View>
  );
};

export { My };
