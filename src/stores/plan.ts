import { selector } from "recoil";
import { fetchLatestTravelPlan, fetchDaySchedules } from "~api";

export const latestPlanQuery = selector({
  key: "fetchLatestTravelPlan",
  get: async () => {
    const data = await fetchLatestTravelPlan();
    const state = {
      isEffectivePlan: data.hasPlan && !data.content.end,
      hasPlan: data.hasPlan,
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
      travelPlanId: latestPlan.data.content.id,
    });
    return {
      data,
    };
  },
});
