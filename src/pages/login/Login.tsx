import React, { FC } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  navigation: NavigationProp<RootStackPramList, "Login">;
};

const Login: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text>Logo Here</Text>
      <Button
        title="Google Login"
        onPress={() => navigation.navigate("Main")}
      />
      <Button
        title="Apple Login!"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
};

export { Login };
