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

export const useFetchPlacesInRegion = (params: FetchPlacesInRegionParams) =>
  useQuery(["fetchPlacesInRegion"], () => fetchPlacesInRegion(params));

export const useFetchPlace = (params: { placeId: string }) => {
  return useQuery(["fetchPlacesByKakaoData", params.placeId], async () => {
    return fetchPlace({ id: params.placeId });
  });
};

export const useGetBookmarkRegions = (params: GetBookmarksRegionsParams) => {
  return useQuery("fetchRegionBookmarks", () => getBookmarksRegions(params));
};
