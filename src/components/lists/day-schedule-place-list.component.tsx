import React, { FC } from "react";
import DraggableFlatList from "react-native-draggable-flatlist";
import { FetchDayScheduleResponse } from "../../api/types";
import { PlaceItem } from "./day-schedule-place-item.component";
import { styles } from "./day-schedule-place-list.styles";

type Props = {
  daySchedulePlaces: FetchDayScheduleResponse["daySchedulePlaces"];
};

const renderItem = ({
  item,
  drag,
}: {
  item: FetchDayScheduleResponse["daySchedulePlaces"][number];
  drag: any;
}) => {
  return (
    <PlaceItem
      name={item.place.name}
      category={item.place.category}
      memo={item.memo}
      onLongPress={drag}
    />
  );
};

export const DaySchedulePlaceList: FC<Props> = ({ daySchedulePlaces }) => {
  return (
    <DraggableFlatList
      style={styles.listView}
      data={daySchedulePlaces || []}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onDragEnd={({ data }) => data}
    />
  );
};
