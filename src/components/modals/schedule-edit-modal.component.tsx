import React, { FC, startTransition, useEffect, useState } from "react";
import { KeyboardAvoidingView, Modal, TextInput, View } from "react-native";
import { Text } from "../text.component";
import { SelectScheduleDay } from "../selects/select-schedule-day.component";
import { Button } from "../buttons/button.component";
import {
  Category,
  CategoryText,
  FontSize,
  FontWeight,
  HexColor,
} from "~constants";
import { daySchedulesQuery, useDayScheduleAction } from "~stores/plan";
import { RecoilValue, useRecoilValueLoadable } from "recoil";
import { FetchDaySchedulesResponse } from "../../api/types";

type Props = {
  placeId: string;
  placeName: string;
  placeCategory: Category;
  address: string;
  visible: boolean;
  initialMemo: string;
  onPressClose: () => void;
  onPressConfirm: (data: { selectedDay: number; memo: string }) => void;
};

export const ScheduleEditModal: FC<Props> = ({
  placeId,
  placeName,
  placeCategory,
  address,
  visible,
  initialMemo,
  onPressClose,
  onPressConfirm,
}) => {
  const [memo, setMemo] = useState(initialMemo);
  const [selectedDay, setSelectedDay] = useState(1);
  const lodableDaySchedules = useRecoilValueLoadable(daySchedulesQuery);
  const dayScheduleAction = useDayScheduleAction(selectedDay);

  useEffect(() => setMemo(memo), [initialMemo]);

  const daySchedules: { data: FetchDaySchedulesResponse } =
    lodableDaySchedules.contents;
  return (
    <Modal visible={visible} transparent>
      <View
        style={{
          backgroundColor: "rgba(27, 32, 39, 0.6)",
          height: "100%",
          paddingTop: 117,
        }}
      >
        <View
          style={{
            backgroundColor: HexColor.White,
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 28,
          }}
        >
          <KeyboardAvoidingView behavior="height" style={{ height: "100%" }}>
            <View
              style={{
                backgroundColor: HexColor.White,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                display: "flex",
                flex: 1,
                height: "100%",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: HexColor.N900,
                    fontSize: FontSize.Large,
                    fontWeight: FontWeight.SemiBold,
                  }}
                >
                  {placeName}
                </Text>
                <Text>{CategoryText[placeCategory]}</Text>
                <Text
                  style={{
                    fontWeight: FontWeight.Regular,
                    fontSize: FontSize.Small,
                    color: HexColor.N500,
                  }}
                >
                  {address}
                </Text>
              </View>

              <SelectScheduleDay
                selectedDay={selectedDay}
                onSelect={setSelectedDay}
              />
              <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <TextInput
                  multiline
                  value={memo}
                  onChangeText={setMemo}
                  autoFocus
                  style={{
                    borderColor: "rgba(194, 200, 207, 1)",
                    borderWidth: 1,
                    alignSelf: "stretch",
                    height: 170,
                    borderRadius: 16,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                  }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingVertical: 20,
                  }}
                >
                  <Button
                    title="취소"
                    style={{
                      backgroundColor: HexColor.N20,
                      flex: 1,
                      marginRight: 3,
                      borderRadius: 12,
                    }}
                    onPress={onPressClose}
                  />
                  <Button
                    title="완료"
                    style={{
                      backgroundColor: HexColor.Primary,
                      flex: 1,
                      marginLeft: 3,
                      borderRadius: 12,
                    }}
                    textStyle={{ color: HexColor.White }}
                    onPress={async () => {
                      await dayScheduleAction.add({
                        placeId,
                        memo,
                        dayScheduleId:
                          daySchedules.data.daySchedules[selectedDay - 1].id,
                      });
                      onPressConfirm({
                        memo,
                        selectedDay,
                      });
                    }}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
};
