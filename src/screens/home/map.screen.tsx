import React, { FC } from "react";
import { View, Text } from "react-native";
import { Button, MapWebView, Layout, TopFixedView } from "~components";
import { THEME } from "~constants";
import IconSearch from "~assets/icon/icon-search.svg";
import IconBell from "~assets/icon/icon-bell.svg";
import { styles } from "./map.styles";
import { NavigationProp } from "@react-navigation/native";
import { NavigationKey, HomeNavigationParamList } from "~types";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.HomeMap>;
};

const HomeMapScreen: FC<Props> = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <MapWebView />
      <TopFixedView style={styles.topFixed}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            position: "relative",
          }}
        >
          <Text style={styles.helpMessageText}>
            XXX님{"\n"}설레는 일정을 짜보세요!
          </Text>
          <View style={styles.topFixedButtonsContainer}>
            <Button
              Icon={() => <IconSearch width={17} height={17} />}
              onPress={() => {}}
              buttonStyle={{
                marginRight: 27,
              }}
            />
            <Button
              Icon={() => <IconBell width={17} height={17} />}
              onPress={() => {}}
              style={{}}
            />
          </View>
        </View>
        <Button
          title="일정 작성"
          buttonStyle={{
            backgroundColor: THEME.PRIMARY_BG_COLOR,
          }}
          onPress={() => {
            navigation.navigate(NavigationKey.SettingRegion);
          }}
        />
      </TopFixedView>
    </Layout>
  );
};

export { HomeMapScreen };
