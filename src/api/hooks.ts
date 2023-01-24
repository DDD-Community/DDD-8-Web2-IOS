import { useQuery, useMutation } from "react-query";
import { searchPlaces, postTravelPlan } from "./api";
import { SearchPlaceParams } from "./types";

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
