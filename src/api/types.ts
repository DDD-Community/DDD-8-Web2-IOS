import { StringLiteral } from "typescript";

type Location = {
  latitude: number;
  longitude: number;
};

export type SearchPlaceParams = {
  keyword: string;
  latitude: number;
  longitude: number;
  page: number;
};

export type SearchPlaceResponse = {
  thirdPartyModel: {
    id: string;
    name: string;
    address: string;
    latitude: string;
    longitude: string;
  }[];
  pageableCount: number;
  totalCount: number;
  end: boolean;
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

export type FetchLatestTravelPlanResponse = {
  content: {
    id: string;
    title: string;
    region: string;
    startDate: string;
    travelDays: number;
    end: boolean;
  } | null;
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
  places: {
    id: string;
    name: string;
    category: string;
    imageLink: string;
    telephone: string;
    location: Location;
    address: {
      region: string;
      detailed: string;
    };
  }[];
};

export type FetchPlacesSearchParams = {
  keyword: string;
  longitude: string;
  latitude: string;
};
