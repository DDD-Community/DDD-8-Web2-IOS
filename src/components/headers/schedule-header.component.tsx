import React, { FC, Suspense } from "react";
import { TopFixedView } from "../top-fixed-view.component";
import { CtaButton } from "../buttons/cta-button.component";
import { Button } from "../buttons/button.component";
import { Text } from "../text.component";
import { View } from "react-native";
import { styles } from "./schedule-header.styles";
import IconMarker from "~assets/icon/icon-marker.svg";
import IconSearch from "~assets/icon/icon-search.svg";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { addDays } from "date-fns";
import { formatDot } from "~utils/date";

type Props = {
  onPressSearch: () => void;
  onPressStartPlanning: () => void;
};

export const ScheduleHeader: FC<Props> = ({
  onPressSearch,
  onPressStartPlanning,
}) => {
  const loadableTravelPlan = useRecoilValueLoadable(latestPlanQuery);
  if (loadableTravelPlan.state === "loading") {
    return <></>;
  }
  const travelPlan = loadableTravelPlan.contents;

  const title = travelPlan.data.content?.title!;
  const travelDays = travelPlan.data.content?.travelDays!;
  const startDate = new Date(travelPlan.data.content?.startDate!);
  const endDate = addDays(startDate, travelDays - 1);
  const formattedStartDate = formatDot(startDate);
  const travelDayInfoText = `${formattedStartDate} - ${endDate.getDate()} (${travelDays}일간)`;

  return (
    <TopFixedView>
      <View style={styles.topFixedCardView}>
        <IconMarker />
        <View style={styles.topFixedCardViewTextView}>
          <Text>{title}</Text>
          <Text>{travelDayInfoText}</Text>
        </View>
        <Button
          Icon={IconSearch}
          style={{ marginRight: 6 }}
          onPress={onPressSearch}
        ></Button>
      </View>
      <View style={styles.buttonView}>
        <CtaButton onPress={onPressStartPlanning} />
      </View>
    </TopFixedView>
  );
};
