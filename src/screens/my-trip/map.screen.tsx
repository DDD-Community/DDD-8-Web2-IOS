import React from "react";
import { View } from "react-native";
import { SearchInput, MapWebView } from "~components";

const MyTripScreen = () => {
  return (
    <View>
      <MapWebView />
      <SearchInput placeholder="장소를 검색해보세요!" />
    </View>
  );
};

export { MyTripScreen };
