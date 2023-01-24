import React, { FC } from "react";
import { View, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import {
  BottomFixedView,
  Button,
  Layout,
  Text,
  TopFixedView,
} from "~components";
import { styles } from "./search-result-detail.styles";
import IconLeftArrowWhite from "~assets/icon/icon-left-arrow-white.svg";
import { MainNavigationParamList, NavigationKey } from "~types";
import IconNaverBlog from "~assets/icon/icon-naver-blog.svg";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

const BLOG_ITEMS = [
  "포항 호미곶 해맞이광장 바다와 상생의 손",
  "포항 여행 볼거리 명소 포항 해맞이광장 상생의손",
  "포항 여행 볼거리 명소 포항 해맞이광장 상생의손",
];

export const SearchResultDetailScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <View>
        <Image source={require("../../../assets/temp.jpeg")} />
      </View>
      <View style={styles.placeDetailView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>상생의 손</Text>
          <Text style={styles.categoryText}>관광, 명소</Text>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.addressText}>
            경상북도 포항시 남구 호미곶면 해맞이로 136
          </Text>
          <Text style={styles.phoneNumText}>070-1234-5678</Text>
        </View>
      </View>
      <View style={styles.blogItemsView}>
        <View style={styles.blogTitleView}>
          <IconNaverBlog />
          <Text style={styles.blogTitleText}>네이버 블로그 장소 후기</Text>
        </View>
        <View>
          {BLOG_ITEMS.map((item, index) => (
            <View style={styles.blogItemView} key={index}>
              <Text style={styles.blogItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <TopFixedView style={{ display: "flex", alignItems: "flex-start" }}>
        <Button
          Icon={IconLeftArrowWhite}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        ></Button>
      </TopFixedView>
      <BottomFixedView>
        <Button title="일정 추가하기"></Button>
      </BottomFixedView>
    </View>
  );
};
