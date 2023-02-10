import { StringLiteral } from "typescript";
import { Category } from "../constants/place-category";

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
    detailAddress: string;
    imageUrl: string;
    category: Category;
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
      category: Category;
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
    category: Category;
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

export type PostKakaoPlaceParams = {
  id: string;
  name: string;
  address: string;
};

export type FetchUserResponse = {
  name: string;
};

export type PostKakaoPlaceResponse = {
  id: string;
  name: string;
  category: Category;
  address: string;
  location: Location;
  telephone: string;
  bookmark: {
    present: boolean;
    activated: boolean;
  };
};

export type FetchPlaceParams = {
  id: string;
};

export type FetchPlaceResponse = {
  id: string;
  kakaoId: string;
  name: string;
  caregory: Category;
  address: string;
  location: Location;
  imageLink: string;
  additionalInfoLink: string;
  telephone: string;
  blogs: [
    {
      title: string;
      link: string;
    }
  ];
  bookmark: {
    present: boolean;
    activated: boolean;
  };
};

export type PostDaySchedulePlaceParams = {
  travelPlanId: string;
  dayScheduleId: string;
  placeId: string;
  memo: string;
};

export type PostBookmarkParams = {
  placeId: string;
};

export type DeleteDayScheduleParams = {
  travelPlanId: string;
  dayScheduleId: string;
  placeId: string;
};

export type GetBookmarksRegionsParams = {
  region: string;
  page: number;
  size: number;
};

export type GetBookmarksRegionsResponse = {
  places: {
    id: string;
    name: string;
    imageLink: string;
  }[];
  hasNext: boolean;
};
