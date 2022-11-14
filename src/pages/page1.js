import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const Page1 = () => {
  const [text, setText] = useState("initial value");
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  useEffect(() => {
    setEffectCount(count + 2);
  }, [count]);

  return (
    <View>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Text>count: {count}</Text>
      <Text>effect count: {effectCount}</Text>
      <Button
        style={styles.button}
        title="count-up"
        onPress={() => setCount((prev) => prev + 1)}
      />
      <Button
        style={styles.button}
        title="count-down"
        onPress={() => setCount((prev) => prev - 1)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
  },
});

export { Page1 };
