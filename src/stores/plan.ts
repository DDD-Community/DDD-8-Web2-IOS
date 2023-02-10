import {
  selector,
  selectorFamily,
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import {
  fetchLatestTravelPlan,
  fetchDaySchedules,
  deleteDaySchedulePlace,
  fetchDaySchedule,
  postDaySchedulePlace,
  postTravelPlan,
  CreateTravelPlanParams,
  patchDaySchedulePlace,
} from "~api";
import { REGION_LAT_LANGS } from "../constants/regions";

const DEFAULT_LOCATION = {
  latitude: 37.5326,
  longitude: 127.024612,
};

export const latestPlanQuery = selector({
  key: "fetchLatestTravelPlan",
  get: async () => {
    const data = await fetchLatestTravelPlan();
    console.log(data);
    const state = {
      isEffectivePlan: data.hasPlan && !data.content?.end,
      hasPlan: data.hasPlan,
      location: data.content?.region
        ? REGION_LAT_LANGS[data.content.region]
        : DEFAULT_LOCATION,
    };
    return {
      state,
      data,
    };
  },
});

export const useTravelPlanAction = () => {
  const refresh = useRecoilRefresher_UNSTABLE(latestPlanQuery);
  const create = async (params: CreateTravelPlanParams) => {
    await postTravelPlan(params);
    refresh();
  };

  return {
    create,
  };
};

export const daySchedulesQuery = selector({
  key: "fetchDaySchedules",
  get: async ({ get }) => {
    const latestPlan = get(latestPlanQuery);
    if (!latestPlan.state.hasPlan) {
      return null;
    }
    const data = await fetchDaySchedules({
      travelPlanId: latestPlan.data.content?.id!,
    });
    return {
      data,
    };
  },
});

export const dayScheduleQuery = selectorFamily({
  key: "fetchDaySchedule",
  get:
    (day: number) =>
    async ({ get }) => {
      const travelPlan = get(latestPlanQuery);
      const daySchedules = get(daySchedulesQuery);
      if (!daySchedules || !travelPlan.data.content) {
        return null;
      }
      const data = await fetchDaySchedule({
        travelPlanId: travelPlan.data.content.id,
        dayScheduleId: daySchedules.data.daySchedules[day - 1].id,
      });
      return data;
    },
});

export const useDayScheduleAction = (day: number) => {
  const travelPlan = useRecoilValueLoadable(latestPlanQuery);
  const daySchedule = useRecoilValueLoadable(dayScheduleQuery(day));
  const resetDaySchedule = useRecoilRefresher_UNSTABLE(dayScheduleQuery(day));

  const remove = async (params: { placeId: string; dayScheduleId: string }) => {
    await deleteDaySchedulePlace({
      travelPlanId: travelPlan.contents.data.content!.id,
      ...params,
    });
    resetDaySchedule();
  };

  const add = async (params: {
    placeId: string;
    memo: string;
    dayScheduleId: string;
  }) => {
    await postDaySchedulePlace({
      placeId: params.placeId,
      travelPlanId: travelPlan.contents.data.content.id,
      memo: params.memo,
      dayScheduleId: params.dayScheduleId,
    });
    resetDaySchedule();
  };

  const edit = async (params: {
    daySchedulePlaceId: string;
    memo: string;
    dayScheduleId: string;
  }) => {
    await patchDaySchedulePlace({
      travelPlanId: travelPlan.contents.data.content.id,
      memo: params.memo,
      dayScheduleId: params.dayScheduleId,
      daySchedulePlaceId: params.daySchedulePlaceId,
    });
    resetDaySchedule();
  };
  return {
    remove,
    add,
    edit,
  };
};
