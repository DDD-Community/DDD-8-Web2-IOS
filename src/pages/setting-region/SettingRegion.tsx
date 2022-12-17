import React, { FC, Fragment, useMemo, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { Col, Grid, Row } from "../../components/Grid";
import { ALL_REGION_LIST } from "../../constants/regions";
import { chunk } from "../../utils/array";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
  cardsContainer: {},
  card: {},
});

type Props = {
  navigation: NavigationProp<RootStackPramList, "SettingRegion">;
};

const SettingRegion: FC<Props> = ({ navigation }) => {
  const [text, setText] = useState("");

  const regionRows = useMemo(() => chunk(ALL_REGION_LIST, 3), []);

  return (
    <View style={styles.page}>
      <Text>라트립은 현재 국내여행 중 여행지를 선택해주세요!</Text>
      <View></View>
      <Grid>
        {regionRows.map((row, rowIndex) => {
          return (
            <Row key={rowIndex}>
              {row.map((col) => {
                return (
                  <Col key={col.title}>
                    <Text>{col.title}</Text>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Grid>
    </View>
  );
};

export { SettingRegion };
