import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  InvalidateOptions,
} from "react-query";
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
  postBookmark,
  patchBookmark,
  getBookmarksRegions,
} from "./api";
import { queryClient } from "./clients";
import type {
  FetchBookmarkParams,
  FetchDayScheduleParams,
  SearchPlaceParams,
  FetchDaySchedulesParams,
  FetchPlacesInRegionParams,
  PostBookmarkParams,
  GetBookmarksRegionsParams,
} from "./types";

export const useSearchPlaces = (params: SearchPlaceParams) => {
  const query = useQuery("searchPlaces", () => searchPlaces(params), {
    enabled: false,
  });
  return [query.refetch, query] as const;
};

// export const useCreateTravelPlan = () => {
//   const { data, isLoading, mutate } = useMutation(postTravelPlan);

//   return {
//     createTravelPlan: mutate,
//     data,
//     isLoading,
//   } as const;
// };

// export const useGetBookmarks = (params: FetchBookmarkParams) =>
//   useQuery("getBookmarks", () => fetchBookmarks(params));

export const useGetInifiniteBookmarks = ({
  size,
  category,
}: Omit<FetchBookmarkParams, "page">) => {
  return useInfiniteQuery(
    ["getBookmarks"],
    async ({ pageParam = 0 }) => {
      const bookmarks = await fetchBookmarks({
        category,
        page: pageParam,
        size,
      });
      return {
        places: bookmarks.places,
        hasNext: bookmarks.hasNext,
        currentPage: pageParam,
      };
    },
    {
      getNextPageParam(lastPage) {
        if (lastPage.hasNext) {
          return lastPage.currentPage + 1;
        }
        return undefined;
      },
    }
  );
};

export const useBookmarkAction = () => {
  const add = async (params: PostBookmarkParams) => {
    await postBookmark(params);
    queryClient.invalidateQueries({
      queryKey: ["getBookmarks"],
    });
  };

  const toggle = async (params: PostBookmarkParams, refetch = true) => {
    await patchBookmark(params);
    if (refetch) {
      queryClient.invalidateQueries({
        queryKey: ["getBookmarks"],
      });
    }
  };

  return {
    add,
    toggle,
  };
};

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

export const useGetBookmarkRegions = (params: GetBookmarksRegionsParams) => {
  return useQuery("fetchRegionBookmarks", () => getBookmarksRegions(params));
};
