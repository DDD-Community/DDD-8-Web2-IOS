import { useQuery } from "react-query";
import { authedClient } from "./clients";

type SearchPlaceParams = {
  keyword: string;
  latitude: string;
  longitude: string;
  page: number;
};

type SearchPlaceResponse = {
  palceSearchModels: {
    placeKakaoId: string;
    placeName: string;
    address: string;
    latitude: string;
    longitude: string;
  };
};

const searchPlaces = ({
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

export const useSearchPlaces = (params: SearchPlaceParams) => {
  const query = useQuery("searchPlaces", () => searchPlaces(params), {
    enabled: false,
  });
  return [query.refetch, query] as const;
};
