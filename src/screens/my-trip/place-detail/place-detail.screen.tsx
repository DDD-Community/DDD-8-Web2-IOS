import React, { FC, useEffect, useState } from "react";
import { View, Image, SafeAreaView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import {
  BottomFixedView,
  Button,
  ScheduleEditModal,
  Text,
  TopFixedView,
} from "~components";
import { styles } from "./place-detail.styles";
import { MainNavigationParamList, NavigationKey } from "~types";
import {
  fetchPlace,
  FetchPlaceResponse,
  postDaySchedulePlace,
  postKakaoPlace,
} from "~api";
import { CategoryText } from "~constants";
import { removeTags } from "~utils/string";
import IconNaverBlog from "~assets/icon/icon-naver-blog.svg";
import IconLeftArrowWhite from "~assets/icon/icon-left-arrow-white.svg";
import IconBookmarkBoxInactive from "~assets/icon/icon-bookmark-box-inactive.svg";
import IconBookmarkBoxActive from "~assets/icon/icon-bookmark-box-active.svg";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
  route: {
    params: {
      id: string;
      name: string;
      address: string;
    };
  };
};

export const PlaceDetailScreen: FC<Props> = ({ navigation, route }) => {
  const travelPlan = useRecoilValue(latestPlanQuery);
  const [place, setPlace] = useState<FetchPlaceResponse | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const kakaoPlaceData = await postKakaoPlace({
        id: route.params.id,
        name: route.params.name,
        address: route.params.address,
      });
      const data = await fetchPlace({ id: kakaoPlaceData.id });
      setPlace(data);
    })();
  }, [route.params.id]);

  if (!place) {
    return null;
  }

  return (
    <View style={styles.view}>
      <View>
        <Image source={{ uri: place.imageLink }} style={styles.image} />
      </View>
      <View style={styles.placeDetailView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{place.name}</Text>
          <Text style={styles.categoryText}>
            {CategoryText[place.caregory]}
          </Text>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.addressText}>{place.address}</Text>
          <Text style={styles.phoneNumText}>{place.telephone}</Text>
        </View>
      </View>
      <View style={styles.blogItemsView}>
        <View style={styles.blogTitleView}>
          <IconNaverBlog />
          <Text style={styles.blogTitleText}>네이버 블로그 장소 후기</Text>
        </View>
        <View>
          {place.blogs.map((item, index) => (
            <View style={styles.blogItemView} key={index}>
              <Text style={styles.blogItemText}>{removeTags(item.title)}</Text>
            </View>
          ))}
        </View>
      </View>
      <TopFixedView style={styles.topFixedView}>
        <Button
          Icon={IconLeftArrowWhite}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      </TopFixedView>
      <SafeAreaView style={{ height: 68, backgroundColor: "#fff" }}>
        <BottomFixedView style={styles.bottomFixedView}>
          <Button Icon={IconBookmarkBoxInactive} />
          <Button
            title="일정 추가하기"
            style={{ flex: 1 }}
            buttonStyle={[styles.button, styles.addScheduleButton]}
            textStyle={[styles.buttonText, styles.addScheduleButtonText]}
            onPress={() => setModalVisible(true)}
          />
        </BottomFixedView>
      </SafeAreaView>
      <ScheduleEditModal
        placeName={place.name}
        placeCategory={place.caregory}
        address={place.address}
        value={""}
        visible={modalVisible}
        onChangeText={() => {}}
        onPressClose={() => setModalVisible(false)}
        onPressConfirm={() => {
          if (place && travelPlan.data.content) {
            postDaySchedulePlace({
              placeId: place.id,
              travelPlanId: travelPlan.data.content.id,
              memo: "anyting",
            });
          }
        }}
      />
    </View>
  );
};
