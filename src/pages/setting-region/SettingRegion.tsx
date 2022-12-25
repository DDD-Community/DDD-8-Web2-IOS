import React, { FC, Fragment, useMemo, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { Col, Grid, Row } from "../../components/Grid";
import { ALL_REGION_LIST } from "../../constants/regions";
import { chunk, toggle } from "../../utils/array";
import { usePlanRegionsState } from "../../store/plan";

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
  const { regions, toggleRegion } = usePlanRegionsState();
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
                const isSelected = regions.includes(col.title);
                const borderColor = isSelected ? "black" : "white";
                return (
                  <Col
                    key={col.title}
                    onPress={() => toggleRegion(col.title)}
                    borderColor={borderColor}
                    borderWidth={2}
                    height={40}
                  >
                    <Text style={{ height: "100%" }}>{col.title}</Text>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Grid>
      <Button title="Next" onPress={() => navigation.navigate("SettingDate")} />
    </View>
  );
};

export { SettingRegion };
