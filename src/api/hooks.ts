import { useQuery, useMutation } from "react-query";
import {
  searchPlaces,
  postTravelPlan,
  fetchBookmarks,
  fetchCurrentTravelPlan,
  fetchDaySchedule,
  fetchDaySchedules,
} from "./api";
import type {
  FetchBookmarkParams,
  FetchDayScheduleParams,
  SearchPlaceParams,
  FetchDaySchedulesParams,
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
  const travelPlan = useQuery("fetchCurrentTravel", fetchCurrentTravelPlan);
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
