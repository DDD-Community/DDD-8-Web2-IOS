import { selector } from "recoil";
import { fetchLatestTravelPlan, fetchDaySchedules } from "~api";
import { REGION_LAT_LANGS } from "../constants/regions";

const DEFAULT_LOCATION = {
  latitude: 37.5326,
  longitude: 127.024612,
};

export const latestPlanQuery = selector({
  key: "fetchLatestTravelPlan",
  get: async () => {
    const data = await fetchLatestTravelPlan();
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
