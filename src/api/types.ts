import { StringLiteral } from "typescript";

type Location = {
  latitude: number;
  longitude: number;
};

export type SearchPlaceParams = {
  keyword: string;
  latitude: string;
  longitude: string;
  page: number;
};

export type SearchPlaceResponse = {
  palceSearchModels: {
    placeKakaoId: string;
    placeName: string;
    address: string;
    latitude: string;
    longitude: string;
  };
};

export type CreateTravelPlanParams = {
  region: string;
  travelStartDate: string;
  travelDays: number;
};

export type CreateTravelPlanResponse = {
  planUUID: string;
  title: string;
  region: string;
  startDate: string;
  travelDays: number;
};

type Pageable = {
  page: number;
  size: number;
  sort?: string[];
};

export type FetchBookmarkParams = Pageable & { category?: string };

export type FetchBookmarksResponse = {
  places: {
    id: string;
    name: string;
    defailAddress: string;
    imageUrl: string;
    category: string;
    bookmark: {
      id: string;
      bookmarked: boolean;
    };
  }[];
  hasNext: boolean;
};

export type FetchCurrentTravelPlanResponse = {
  content: {
    id: string;
    title: string;
    region: string;
    startDate: string;
    travelDays: number;
  };
  hasPlan: boolean;
};

export type FetchDaySchedulesParams = {
  travelPlanId: string;
};

export type FetchDaySchedulesResponse = {
  daySchedules: {
    id: string;
    localDate: string;
  }[];
};

export type FetchDayScheduleParams = {
  travelPlanId: string;
  dayScheduleId: string;
};

export type FetchDayScheduleResponse = {
  id: string;
  daySchedulePlaces: {
    id: string;
    memo: string;
    sequence: number;
    place: {
      id: string;
      name: string;
      category: string;
      location: Location;
    };
  }[];
  hasRegisteredPlace: boolean;
};

export type FetchPlacesInRegionParams = {
  region: string;
  page: number;
  size: number;
};

export type FetchPlacesInRegionResponse = {
  placeInRegionResponses: {
    id: string;
    name: string;
    category: string;
    imageLink: string;
    location: Location;
  }[];
};

export type FetchPlacesSearchParams = {
  keyword: string;
  longitude: string;
  latitude: string;
};
