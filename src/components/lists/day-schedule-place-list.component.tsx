import React, { FC, useState } from "react";
import { View } from "react-native";
import {
  NestableScrollContainer,
  NestableDraggableFlatList,
} from "react-native-draggable-flatlist";
import { FetchDayScheduleResponse } from "../../api/types";
import { HexColor } from "../../constants/theme";
import { Button } from "../buttons/button.component";
import { DaySchedulePlaceItem } from "./day-schedule-place-item.component";
import { styles } from "./day-schedule-place-list.styles";

type Props = {
  daySchedulePlaces: FetchDayScheduleResponse["daySchedulePlaces"];
  editable: boolean;
  onChangeEditMode: (editable: boolean) => void;
};

const renderItem = ({
  item,
  drag,
  editable,
  number,
  isLast,
}: {
  item: FetchDayScheduleResponse["daySchedulePlaces"][number];
  drag: any;
  editable: boolean;
  number: number;
  isLast: boolean;
}) => {
  return (
    <DaySchedulePlaceItem
      name={item.place.name}
      category={item.place.category}
      memo={item.memo}
      onLongPress={drag}
      editable={editable}
      number={number}
      isLast={isLast}
    />
  );
};

export const DaySchedulePlaceList: FC<Props> = ({
  daySchedulePlaces,
  editable,
  onChangeEditMode,
}) => {
  const [data, setData] = useState(daySchedulePlaces);

  return (
    <NestableScrollContainer style={styles.containerView}>
      <NestableDraggableFlatList
        style={styles.listView}
        data={data || []}
        renderItem={(args) => {
          const num = (args.getIndex() || 0) + 1;
          return renderItem({
            ...args,
            editable,
            number: num,
            isLast: num === data.length,
          });
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
            onPress={() => {
              onChangeEditMode(!editable);
            }}
          />
        )}
        {!editable && (
          <Button
            title="일정 편집하기"
            buttonStyle={styles.editButton}
            textStyle={styles.editButtonText}
            onPress={() => {
              onChangeEditMode(!editable);
            }}
          />
        )}
      </View>
    </NestableScrollContainer>
  );
};
