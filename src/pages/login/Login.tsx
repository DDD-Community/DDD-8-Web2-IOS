import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Login = () => {
  return (
    <View style={styles.view}>
      <Text>Logo Here</Text>
      <Button title="Google Login" />
      <Button title="Apple Login!" />
    </View>
  );
};

export { Login };
