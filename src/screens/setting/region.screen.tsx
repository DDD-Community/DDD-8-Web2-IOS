import React, { FC, useMemo } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { chunk } from "~utils/array";
import { usePlanRegionState } from "~stores/plan";
import { Button, Col, Grid, Layout, Row, Text } from "~components";
import { THEME, ALL_REGION_LIST, FontSize, FontWeight } from "~constants";
import { styles } from "./region.styles";
import IconMarker from "~assets/icon/icon-marker.svg";
import IconNavClose from "~assets/icon/icon-nav-close.svg";
import { AppNavigationParamList, NavigationKey } from "~types";

type Props = {
  navigation: NavigationProp<
    AppNavigationParamList,
    NavigationKey.SettingRegion
  >;
};

export const SettingRegionScreen: FC<Props> = ({ navigation }) => {
  const { region, setRegion } = usePlanRegionState();
  const regionRows = useMemo(() => chunk(ALL_REGION_LIST, 3), []);

  return (
    <Layout safeAreaStyle={styles.safeArea}>
      <ScrollView style={styles.view}>
        <View style={styles.header}>
          <IconMarker />
          <Text style={styles.headerDescText}>
            라트립은 현재 국내여행 중,{"\n"}여행지를 선택해주세요!
          </Text>
          <Button
            Icon={IconNavClose}
            style={styles.headerCloseButton}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Grid>
          {regionRows.map((row, rowIndex) => {
            return (
              <Row key={rowIndex}>
                {row.map(({ title, source }) => {
                  const isSelected = region === title;
                  const borderColor = isSelected
                    ? THEME.PRIMARY_BG_COLOR
                    : "transparent";

                  return (
                    <Col
                      key={title}
                      onPress={() => setRegion(title)}
                      style={[
                        styles.col,
                        {
                          borderColor,
                        },
                      ]}
                    >
                      <ImageBackground
                        source={source}
                        resizeMode="cover"
                        style={styles.colImage}
                      >
                        <View style={styles.colMask}>
                          <Text style={styles.regionText}>{title}</Text>
                        </View>
                      </ImageBackground>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </Grid>
      </ScrollView>
      <View style={styles.bottomFixedView}>
        <Button
          title={region ? `${region} 선택` : "하나의 지역을 선택해주세요"}
          onPress={() => navigation.navigate(NavigationKey.SettingDate)}
          buttonStyle={[
            styles.selectButtonCommon,
            region ? styles.selectButtonActive : styles.selectButtonInactive,
          ]}
          textStyle={
            region
              ? styles.selectButtonTextActive
              : styles.selectButtonTextInactive
          }
        />
      </View>
    </Layout>
  );
};
