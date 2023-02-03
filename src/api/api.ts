import { httpClient } from "./clients";
import type {
  SearchPlaceParams,
  SearchPlaceResponse,
  CreateTravelPlanParams,
  FetchBookmarksResponse,
  FetchBookmarkParams,
  FetchLatestTravelPlanResponse,
  FetchDayScheduleResponse,
  FetchDayScheduleParams,
  FetchDaySchedulesParams,
  FetchDaySchedulesResponse,
  FetchPlacesInRegionParams,
  FetchPlacesInRegionResponse,
} from "./types";

export const searchPlaces = ({
  keyword,
  latitude,
  longitude,
  page,
}: SearchPlaceParams) => {
  const query = `?keyword=${keyword}&latitude=${latitude}&longitude=${longitude}&page=${page}`;
  return httpClient
    .get<SearchPlaceResponse>(`/v1/place/search${query}`)
    .then((res) => res.data);
};

export const postTravelPlan = (params: CreateTravelPlanParams) =>
  httpClient.post(`/v1/travel-plans`, params).then((res) => res.data);

export const fetchBookmarks = ({
  category,
  page,
  size,
}: FetchBookmarkParams) => {
  let query = `page=${page}&size=${size}`;
  if (category) {
    query += `&category=${category}`;
  }

  return httpClient
    .get<FetchBookmarksResponse>(`/v1/places/bookmarks?${query}`)
    .then((res) => res.data);
};

export const fetchLatestTravelPlan = () =>
  httpClient
    .get<FetchLatestTravelPlanResponse>("/v1/travel-plans/latest")
    .then((res) => res.data);

export const fetchDaySchedules = ({ travelPlanId }: FetchDaySchedulesParams) =>
  httpClient
    .get<FetchDaySchedulesResponse>(
      `/v1/travel-plans/${travelPlanId}/day-schedules`
    )
    .then((res) => res.data);

export const fetchDaySchedule = ({
  travelPlanId,
  dayScheduleId,
}: FetchDayScheduleParams) =>
  httpClient
    .get<FetchDayScheduleResponse>(
      `/v1/travel-plans/${travelPlanId}/day-schedules/${dayScheduleId}`
    )
    .then((res) => res.data);

export const fetchPlacesInRegion = ({
  region,
  page,
  size,
}: FetchPlacesInRegionParams) =>
  httpClient
    .get<FetchPlacesInRegionResponse>(
      `/v1/places/regions?region=${region}&page=${page}&size=${size}`
    )
    .then((res) => res.data);

export const fetchPlacesSearch = () => {};

export const fetchUserName = () => {
  return httpClient
    .get<{ name: string }>(`/v1/user/name`)
    .then((res) => res.data);
};
