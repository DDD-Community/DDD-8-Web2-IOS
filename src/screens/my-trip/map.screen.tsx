import React, { FC, useState } from "react";
import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import {
  SearchInput,
  MapWebView,
  TopFixedCard,
  Layout,
  Text,
  DaysTab,
} from "~components";
import IconMarker from "~assets/icon/icon-marker.svg";
import { styles } from "./map.styles";
import { MainNavigationParamList, NavigationKey } from "~types";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

const MyTripMapScreen: FC<Props> = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <Layout>
      <View style={styles.mapContainer}>
        <MapWebView />
        <View
          style={{
            height: 227,
            paddingLeft: 0,
            paddingTop: 13,
            paddingRight: 0,
          }}
        >
          <DaysTab
            days={10}
            selectedDay={selectedDay}
            onSelect={setSelectedDay}
          />
        </View>
      </View>
      <TopFixedCard>
        <View style={styles.topFixedCardView}>
          <IconMarker />
          <View style={styles.topFixedCardViewTextView}>
            <Text>경기도 여행</Text>
            <Text>2023.02.12 ~ 18 {"(7일간)"}</Text>
          </View>
        </View>
        <SearchInput
          style={styles.searchInput}
          placeholder="장소를 검색해보세요!"
          onSumbitEditing={() =>
            navigation.navigate(NavigationKey.SearchResult)
          }
        />
      </TopFixedCard>
    </Layout>
  );
};

export { MyTripMapScreen };
