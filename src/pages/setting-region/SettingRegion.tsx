import React, { FC, useMemo } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { chunk } from "../../utils/array";
import { usePlanRegionsState } from "../../store/plan";
import { Button } from "../../components/Button";
import { Col, Grid, Row } from "../../components/Grid";
import { THEME } from "../../constants/theme";
import { ALL_REGION_LIST } from "../../constants/regions";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 11,
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
    <ScrollView style={styles.page}>
      <View>
        <Text>라트립은 현재 국내여행 중 여행지를 선택해주세요!</Text>
      </View>
      <Grid>
        {regionRows.map((row, rowIndex) => {
          return (
            <Row key={rowIndex}>
              {row.map((col) => {
                const isSelected = regions.includes(col.title);
                const borderColor = isSelected
                  ? THEME.PRIMARY_BG_COLOR
                  : "transparent";

                return (
                  <Col
                    key={col.title}
                    onPress={() => toggleRegion(col.title)}
                    borderColor={borderColor}
                    borderWidth={4}
                    height={106}
                    margin={6}
                    borderRadius={16}
                    backgroundColor="#f3f3f3"
                  >
                    <Text
                      style={{
                        color: "#AAAAAA",
                        textAlign: "center",
                        textAlignVertical: "center",
                      }}
                    >
                      {col.title}
                    </Text>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Grid>
      <Button
        title={`${regions.join("/")} 선택`}
        onPress={() => navigation.navigate("SettingDate")}
        buttonStyle={{
          backgroundColor: THEME.PRIMARY_BG_COLOR,
          color: THEME.PRIMARY_TEXT_COLOR,
          shadowColor: "#000",
        }}
      />
    </ScrollView>
  );
};

export { SettingRegion };
