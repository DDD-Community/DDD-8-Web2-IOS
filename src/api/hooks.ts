import { useQuery, useMutation } from "react-query";
import {
  searchPlaces,
  postTravelPlan,
  fetchBookmarks,
  fetchLatestTravelPlan,
  fetchDaySchedule,
  fetchDaySchedules,
  fetchPlacesInRegion,
  postKakaoPlace,
  fetchPlace,
} from "./api";
import type {
  FetchBookmarkParams,
  FetchDayScheduleParams,
  SearchPlaceParams,
  FetchDaySchedulesParams,
  FetchPlacesInRegionParams,
} from "./types";

export const useSearchPlaces = (params: SearchPlaceParams) => {
  const query = useQuery("searchPlaces", () => searchPlaces(params), {
    enabled: false,
  });
  return [query.refetch, query] as const;
};

export const useCreateTravelPlan = () => {
  const { data, isLoading, mutate } = useMutation(postTravelPlan);

  return {
    createTravelPlan: mutate,
    data,
    isLoading,
  } as const;
};

export const useGetBookmarks = (params: FetchBookmarkParams) =>
  useQuery("getBookmarks", () => fetchBookmarks(params));

export const useFetchCurrentTravelPlan = () => {
  const travelPlan = useQuery("fetchCurrentTravel", fetchLatestTravelPlan);
  const daySchedules = useQuery(
    "fetchDaySchedules",
    () =>
      fetchDaySchedules({
        travelPlanId: travelPlan.data?.content?.id!,
      }),
    {
      enabled: travelPlan.isFetched,
    }
  );
  daySchedules.data?.daySchedules;
  return {
    travelPlan,
    daySchedules,
    isFetched: travelPlan.isFetched && daySchedules.isFetched,
  };
};

export const useFetchDaySchedule = (
  params: FetchDayScheduleParams,
  options?: {
    enabled: boolean;
  }
) => useQuery("fetchDaySchedule", () => fetchDaySchedule(params), options);

export const useFetchPlacesInRegion = (params: FetchPlacesInRegionParams) =>
  useQuery("fetchPlacesInRegion", () => fetchPlacesInRegion(params));

export const useFetchPlaceByKakaoData = (params: {
  id: string;
  name: string;
  address: string;
}) => {
  return useQuery("fetchPlacesByKakaoData", async () => {
    const kakaoPlaceData = await postKakaoPlace(params);
    return fetchPlace({ id: kakaoPlaceData.id });
  });
};
