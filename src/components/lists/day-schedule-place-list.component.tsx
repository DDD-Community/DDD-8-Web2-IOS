import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import {
  NestableScrollContainer,
  NestableDraggableFlatList,
} from "react-native-draggable-flatlist";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { dayScheduleQuery, useDayScheduleAction } from "~stores/plan";
import { ConfirmModal } from "../modals/confirm-modal.component";
import { Button } from "../buttons/button.component";
import { DaySchedulePlaceItem } from "./day-schedule-place-item.component";
import { Text } from "../text.component";
import { styles } from "./day-schedule-place-list.styles";
import { FetchDayScheduleResponse } from "../../api/types";
import { ScheduleMapWebView } from "../webviews/schdule-map-web-view.component";
import { ScheduleEditModal } from "../modals/schedule-edit-modal.component";

type Props = {
  editable: boolean;
  onChangeEditMode: (editable: boolean) => void;
  day: number;
};

export const DaySchedulePlaceList: FC<Props> = ({
  editable,
  onChangeEditMode,
  day,
}) => {
  const lodableDaySchedule = useRecoilValueLoadable(dayScheduleQuery(day));
  const dayScheduleAction = useDayScheduleAction(day);
  const daySchedule: FetchDayScheduleResponse = lodableDaySchedule.contents;
  const [data, setData] = useState(daySchedule.daySchedulePlaces || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletePlaceId, setDeletePlaceId] = useState<string | null>(null);
  const [edtiModalVisible, setEditModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<
    null | FetchDayScheduleResponse["daySchedulePlaces"][number]
  >(null);

  const onPressChangeEditMode = () => onChangeEditMode(!editable);

  useEffect(() => {
    if (daySchedule?.daySchedulePlaces) {
      setData(daySchedule?.daySchedulePlaces);
    }
  }, [daySchedule]);

  if (lodableDaySchedule.state === "loading") {
    return <></>;
  }

  const hasDaySchedule = !!daySchedule?.daySchedulePlaces?.length;

  if (!hasDaySchedule) {
    return (
      <View style={styles.emptyTextView}>
        <Text style={styles.emptyText}>아직 등록된 일정이 없어요</Text>
      </View>
    );
  }

  return (
    <>
      <NestableDraggableFlatList
        scrollEnabled={false}
        style={styles.listView}
        data={data || []}
        renderItem={(args) => {
          const num = (args.getIndex() || 0) + 1;
          return (
            <DaySchedulePlaceItem
              name={args.item.place.name}
              category={args.item.place.category}
              memo={args.item.memo}
              onLongPress={args.drag}
              editable={editable}
              number={num}
              isLast={num === data.length}
              id={args.item.id}
              onPressDelete={() => {
                setDeletePlaceId(args.item.id);
                setModalVisible(true);
              }}
              onPressEdit={() => {
                setEditingItem(args.item);
                setEditModalVisible(true);
              }}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        onDragEnd={({ data }) => setData(data)}
      />
      <View style={styles.buttonView}>
        {editable && (
          <Button
            title="일정 편집완료"
            buttonStyle={styles.saveButton}
            textStyle={styles.saveButtonText}
            onPress={onPressChangeEditMode}
          />
        )}
        {!editable && (
          <Button
            title="일정 편집하기"
            buttonStyle={styles.editButton}
            textStyle={styles.editButtonText}
            onPress={onPressChangeEditMode}
          />
        )}
      </View>

      <ConfirmModal
        visible={modalVisible}
        onPressCancel={() => {
          setModalVisible(false);
          setDeletePlaceId(null);
        }}
        onPressConfirm={async () => {
          if (deletePlaceId && daySchedule) {
            await dayScheduleAction.remove({
              placeId: deletePlaceId,
              dayScheduleId: daySchedule.id,
            });
            setModalVisible(false);
          }
        }}
      />
      {editingItem && (
        <ScheduleEditModal
          visible={edtiModalVisible}
          placeId={editingItem.place.id}
          placeCategory={editingItem.place.category}
          placeName={editingItem.place.name}
          initialMemo={editingItem.memo}
          onPressClose={() => {
            setEditingItem(null);
            setEditModalVisible(false);
          }}
          onPressConfirm={async ({ memo, selectedDay }) => {
            await dayScheduleAction.edit({
              daySchedulePlaceId: editingItem.id,
              memo,
              dayScheduleId: daySchedule.id,
            });
            setEditingItem(null);
            setEditModalVisible(false);
          }}
          initialiSelectedDay={1}
          confirmButtonTitle="완료"
          address={""}
        />
      )}
    </>
  );
};
