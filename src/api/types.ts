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
  trabelStartDate: string;
  travelDays: number;
};

export type CreateTravelPlanResponse = {
  planUUID: string;
  title: string;
  region: string;
  startDate: string;
  travelDays: number;
};
