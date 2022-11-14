import { Button, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button title="page1" onPress={() => navigation.navigate("Page1")} />
      <Button title="page2" onPress={() => navigation.navigate("Page2")} />
    </View>
  );
};

export { Home };
