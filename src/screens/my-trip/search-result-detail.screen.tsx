import React, { FC } from "react";
import { View, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Button, Layout, Text, TopFixedCard } from "~components";
import { styles } from "./search-result-detail.styles";
import IconLeftArrowWhite from "~assets/icon/icon-left-arrow-white.svg";
import { MainNavigationParamList, NavigationKey } from "~types";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

export const SearchResultDetailScreen: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <View style={{ backgroundColor: "white" }}>
        <View>
          <Image source={require("../../../assets/temp.jpeg")} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>상생의 손</Text>
          <Text style={styles.categoryText}>관광, 명소</Text>
        </View>
        <View>
          <Text>경상북도 포항시 남구 호미곶면 해맞이로 136</Text>
          <Text>070-1234-5678</Text>
        </View>
        <View>
          <View>
            <Text>네이버 블로그 장소 후기</Text>
          </View>
          <View>
            <View>
              <Text>포항 호미곶 해맞이광장 바다와 상생의 손</Text>
            </View>
            <View>
              <Text>포항 여행 볼거리 명소 포항 해맞이광장 상생의손</Text>
            </View>
            <View>
              <Text>포항 여행 볼거리 명소 포항 해맞이광장 상생의손</Text>
            </View>
          </View>
        </View>
      </View>
      <TopFixedCard style={{ display: "flex", alignItems: "flex-start" }}>
        <Button
          Icon={IconLeftArrowWhite}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        ></Button>
      </TopFixedCard>
    </View>
  );
};
