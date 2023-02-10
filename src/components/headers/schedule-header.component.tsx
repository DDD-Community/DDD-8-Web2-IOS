import React, { FC, Suspense } from "react";
import { FixedView } from "../views/fixed-view.component";
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
import IconLogo from "~assets/icon/icon-logo.svg";

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
  console.log("here", travelPlan);
  const title = travelPlan.data.content?.title!;
  const travelDays = travelPlan.data.content?.travelDays!;
  const startDate = new Date(travelPlan.data.content?.startDate!);
  return (
    <FixedView type="top">
      <View style={styles.topFixedCardView}>
        {travelPlan?.data?.content && (
          <>
            <IconMarker />
            <View style={styles.topFixedCardViewTextView}>
              <Text>{title}</Text>
              <Text>{`${formatDot(startDate)} - ${addDays(
                startDate,
                travelDays - 1
              ).getDate()} (${travelDays}일간)`}</Text>
            </View>
          </>
        )}
        {!travelPlan?.data?.content && <IconLogo />}
        <Button
          Icon={IconSearch}
          style={{ marginRight: 6, marginLeft: "auto" }}
          onPress={onPressSearch}
        ></Button>
      </View>
    </FixedView>
  );
};
