import React, { FC, useEffect, useState } from "react";
import { View, Image, SafeAreaView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { FixedView, Button, ScheduleEditModal, Text } from "~components";
import { styles } from "./place-detail.styles";
import { MainNavigationParamList, NavigationKey } from "~types";
import { FetchPlaceResponse, postDaySchedulePlace, useFetchPlace } from "~api";
import { CategoryText } from "~constants";
import { removeTags } from "~utils/string";
import IconNaverBlog from "~assets/icon/icon-naver-blog.svg";
import IconLeftArrowWhite from "~assets/icon/icon-left-arrow-white.svg";
import IconBookmarkBoxInactive from "~assets/icon/icon-bookmark-box-inactive.svg";
import IconBookmarkBoxActive from "~assets/icon/icon-bookmark-box-active.svg";
import { useRecoilValueLoadable } from "recoil";
import {
  daySchedulesQuery,
  latestPlanQuery,
  useDayScheduleAction,
  useTravelPlanAction,
} from "~stores/plan";
import { useBookmarkAction } from "~api";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
  route: {
    params: {
      placeId: string;
    };
  };
};

export const PlaceDetailScreen: FC<Props> = ({ navigation, route }) => {
  const travelPlan = useRecoilValueLoadable(latestPlanQuery);
  const daySchedules = useRecoilValueLoadable(daySchedulesQuery);
  const [modalVisible, setModalVisible] = useState(false);
  const bookmarkAction = useBookmarkAction();
  const [day, setDay] = useState(1);
  const dayScheduleAction = useDayScheduleAction(day);
  console.log("routeparams", route.params.placeId);
  const placeQuery = useFetchPlace({ placeId: route.params.placeId });
  console.log(placeQuery);
  if (placeQuery.isLoading || !placeQuery.data) {
    return null;
  }
  if (travelPlan.state === "loading" || daySchedules.state === "loading") {
    return <></>;
  }

  console.log("here", route);

  return (
    <View style={styles.view}>
      <View>
        <Image
          source={{ uri: placeQuery.data.imageLink }}
          style={styles.image}
        />
      </View>
      <View style={styles.placeDetailView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{placeQuery.data.name}</Text>
          <Text style={styles.categoryText}>
            {CategoryText[placeQuery.data.caregory]}
          </Text>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.addressText}>{placeQuery.data.address}</Text>
          <Text style={styles.phoneNumText}>{placeQuery.data.telephone}</Text>
        </View>
      </View>
      <View style={styles.blogItemsView}>
        <View style={styles.blogTitleView}>
          <IconNaverBlog />
          <Text style={styles.blogTitleText}>네이버 블로그 장소 후기</Text>
        </View>
        <View>
          {placeQuery.data.blogs.map((item, index) => (
            <View style={styles.blogItemView} key={index}>
              <Text style={styles.blogItemText}>{removeTags(item.title)}</Text>
            </View>
          ))}
        </View>
      </View>
      <FixedView type="top" style={styles.topFixedView}>
        <Button
          Icon={IconLeftArrowWhite}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      </FixedView>
      <SafeAreaView
        style={{
          height: 40,
          backgroundColor: "#fff",
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
      >
        {daySchedules && (
          <FixedView type="bottom" style={styles.bottomFixedView}>
            <Button
              Icon={
                !placeQuery.data.bookmark.activated ||
                !placeQuery.data.bookmark.present
                  ? IconBookmarkBoxInactive
                  : IconBookmarkBoxActive
              }
              onPress={() => {
                if (!placeQuery.data.bookmark.present) {
                  bookmarkAction.add({ placeId: placeQuery.data.id });
                } else {
                  bookmarkAction.toggle({ placeId: placeQuery.data.id });
                }
                placeQuery.refetch();
              }}
            />
            <Button
              title="일정 추가하기"
              style={{ flex: 1 }}
              buttonStyle={[styles.button, styles.addScheduleButton]}
              textStyle={[styles.buttonText, styles.addScheduleButtonText]}
              onPress={() => setModalVisible(true)}
            />
          </FixedView>
        )}
      </SafeAreaView>
      <ScheduleEditModal
        placeId={placeQuery.data.id}
        placeName={placeQuery.data.name}
        placeCategory={placeQuery.data.caregory}
        initialMemo={""}
        visible={modalVisible}
        onPressClose={() => setModalVisible(false)}
        onPressConfirm={async ({ selectedDay, memo }) => {
          if (travelPlan.contents.data.content) {
            const dayScheduleId =
              daySchedules.contents?.data?.daySchedules?.[selectedDay - 1]?.id;
            console.log("asdasd", {
              placeId: placeQuery.data.id,
              memo,
              dayScheduleId,
            });
            await dayScheduleAction.add({
              placeId: placeQuery.data.id,
              memo,
              dayScheduleId,
            });
            setModalVisible(false);
          }
        }}
        initialiSelectedDay={1}
        confirmButtonTitle="완료"
      />
    </View>
  );
};
