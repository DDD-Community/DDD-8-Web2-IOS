import React, { FC, useMemo, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { chunk } from "~utils/array";
import { FixedView, Button, Col, Grid, Layout, Row, Text } from "~components";
import { THEME, ALL_REGION_LIST } from "~constants";
import { styles } from "./setting-region.styles";
import IconMarker from "~assets/icon/icon-marker.svg";
import IconNavClose from "~assets/icon/icon-nav-close.svg";
import { AppNavigationParamList, NavigationKey } from "~types";

type Props = {
  navigation: NavigationProp<
    AppNavigationParamList,
    NavigationKey.SettingRegion
  >;
};

const REGION_ROWS = chunk(ALL_REGION_LIST, 3);

export const SettingRegionScreen: FC<Props> = ({ navigation }) => {
  const [region, setRegion] = useState({
    title: "",
    value: "",
  });

  const buttonTitle = region.value
    ? `${region.title} 선택`
    : "하나의 지역을 선택해주세요";

  const onPressConfirm = () => {
    if (region) {
      navigation.navigate(NavigationKey.SettingDate, {
        region,
      });
    }
  };

  const onPressBackButton = () => navigation.goBack();

  return (
    <Layout safeAreaStyle={styles.safeArea}>
      <View style={styles.innerView}>
        <View style={styles.header}>
          <IconMarker />
          <Text style={styles.headerDesc}>
            라트립은 현재 국내여행 중,{"\n"}여행지를 선택해주세요!
          </Text>
          <Button
            Icon={IconNavClose}
            style={styles.headerCloseButton}
            onPress={onPressBackButton}
          />
        </View>
        <ScrollView style={styles.view}>
          {/* <View style={styles.header}>
            <IconMarker />
            <Text style={styles.headerDesc}>
              라트립은 현재 국내여행 중,{"\n"}여행지를 선택해주세요!
            </Text>
            <Button
              Icon={IconNavClose}
              style={styles.headerCloseButton}
              onPress={onPressBackButton}
            />
          </View> */}
          <Grid>
            {REGION_ROWS.map((row, rowIndex) => {
              return (
                <RegionRow
                  row={row}
                  key={rowIndex}
                  selectedRegion={region.value}
                  onPressRegion={setRegion}
                />
              );
            })}
          </Grid>
        </ScrollView>
        <FixedView type="bottom" style={styles.bottomFixedView}>
          <Button
            title={buttonTitle}
            onPress={onPressConfirm}
            buttonStyle={[
              styles.confirmButton,
              !!region && styles.confirmButtonActive,
            ]}
            textStyle={[
              styles.confirmButtonText,
              !!region && styles.confirmButtonTextActive,
            ]}
          />
        </FixedView>
      </View>
    </Layout>
  );
};

type RegionRowProps = {
  row: typeof REGION_ROWS[number];
  selectedRegion: string;
  onPressRegion: (params: { title: string; value: string }) => void;
};

const RegionRow: FC<RegionRowProps> = ({
  row,
  selectedRegion,
  onPressRegion,
}) => {
  return (
    <Row>
      {row.map(({ title, value, source }) => {
        const isSelected = selectedRegion === value;
        const borderColor = isSelected ? THEME.PRIMARY_BG_COLOR : "transparent";
        return (
          <Col
            key={title}
            onPress={() => onPressRegion({ title, value })}
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
                <Text style={styles.regionTitle}>{title}</Text>
              </View>
            </ImageBackground>
          </Col>
        );
      })}
    </Row>
  );
};
