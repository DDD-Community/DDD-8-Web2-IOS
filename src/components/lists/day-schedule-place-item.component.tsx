import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "../text.component";
import { styles } from "./day-schedule-place-item.styles";
import { ScaleDecorator } from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconDragButton from "~assets/icon/icon-drag-button.svg";
import IconTrash from "~assets/icon/icon-trash.svg";
import { Button } from "../buttons/button.component";
import {
  Category,
  CategoryText,
  FontSize,
  FontWeight,
  HexColor,
} from "~constants";
import IconEmptyMarker from "~assets/icon/icon-empty-marker.svg";
import IconDotDash from "~assets/icon/icon-dot-dash.svg";

type Props = {
  name: string;
  category?: Category;
  memo?: string;
  onLongPress?: any;
  onPressEdit?: () => void;
  editable?: boolean;
  number: number;
  isLast: boolean;
};

export const DaySchedulePlaceItem: FC<Props> = ({
  number,
  name,
  category,
  memo,
  onLongPress,
  editable,
  onPressEdit,
  isLast,
}) => {
  return (
    <ScaleDecorator>
      <View style={styles.view}>
        {editable ? (
          <Button Icon={IconTrash} style={{ width: 40 }} />
        ) : (
          <>
            <View
              style={{
                position: "relative",
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                width: 40,
                overflow: "visible",
              }}
            >
              <IconEmptyMarker />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 64,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: HexColor.White,
                    fontWeight: FontWeight.Bold,
                    fontSize: FontSize.XSmall,
                    marginBottom: 2,
                  }}
                >
                  {`${number}`.padStart(2, "0")}
                </Text>
              </View>
              {!isLast && (
                <View style={{ position: "absolute", bottom: -22 }}>
                  <IconDotDash />
                </View>
              )}
            </View>
          </>
        )}
        <View style={styles.placeInfoView}>
          <TouchableOpacity
            onPress={() => {
              if (editable) {
                onPressEdit?.();
              }
            }}
          >
            <View style={styles.placeInfoDetailView}>
              <View style={styles.placeInfoDetail}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>
                  {CategoryText[category || Category.Etc]}
                </Text>
              </View>
              {memo && (
                <View style={{ paddingVertical: 4 }}>
                  <Text
                    style={{
                      fontWeight: FontWeight.Regular,
                      color: HexColor.N900,
                    }}
                  >
                    {memo}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
        {editable && (
          <TouchableOpacity
            onLongPress={onLongPress}
            style={styles.touchableView}
          >
            <IconDragButton />
          </TouchableOpacity>
        )}
      </View>
    </ScaleDecorator>
  );
};
