export enum Category {
  Cafe = "CAFE",
  Restaurant = "RESTAURANT",
  TouristAttraction = "TOURIST_ATTRACTION",
  Accommodation = "ACCOMMODATION",
  Mart = "MART",
  Etc = "ETC",
}

export const CategoryText: Record<Category, string> = {
  [Category.Cafe]: "카페",
  [Category.Restaurant]: "음식점",
  [Category.TouristAttraction]: "관광명소",
  [Category.Accommodation]: "숙박",
  [Category.Mart]: "마트",
  [Category.Etc]: "기타",
};
