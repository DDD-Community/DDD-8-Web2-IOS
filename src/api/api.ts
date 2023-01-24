import { authedClient } from "./clients";
import {
  SearchPlaceParams,
  SearchPlaceResponse,
  CreateTravelPlanParams,
} from "./types";

export const searchPlaces = ({
  keyword,
  latitude,
  longitude,
  page,
}: SearchPlaceParams) => {
  const query = `?keyword=${keyword}&latitude=${latitude}&longitude=${longitude}&page=${page}`;
  return authedClient
    .get<SearchPlaceResponse>(`/v1/place/search${query}`)
    .then((res) => res.data);
};

export const postTravelPlan = (params: CreateTravelPlanParams) => {
  return authedClient.post(`/v1/travel-pans`, params).then((res) => res.data);
};
