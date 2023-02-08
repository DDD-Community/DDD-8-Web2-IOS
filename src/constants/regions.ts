export const ALL_REGION_LIST = [
  {
    title: "서울",
    value: "서울특별시",
    source: require("../../assets/images/seoul.jpeg"),
  },
  {
    title: "부산",
    value: "부산광역시",
    source: require("../../assets/images/busan.jpeg"),
  },
  {
    title: "대구",
    value: "대구광역시",
    source: require("../../assets/images/daegu.jpeg"),
  },
  {
    title: "인천",
    value: "인천광역시",
    source: require("../../assets/images/incheon.jpeg"),
  },
  {
    title: "대전",
    value: "대전광역시",
    source: require("../../assets/images/daejeon.png"),
  },
  {
    title: "울산",
    value: "울산광역시",
    source: require("../../assets/images/ulsan.png"),
  },
  {
    title: "세종",
    value: "세종특별자치시",
    source: require("../../assets/images/sejong.png"),
  },
  {
    title: "경기도",
    value: "경기도",
    source: require("../../assets/images/gyeonggi.png"),
  },
  {
    title: "강원",
    value: "강원도",
    source: require("../../assets/images/gangwon.png"),
  },
  {
    title: "충청북도",
    value: "충청북도",
    source: require("../../assets/images/chungcheong-north.png"),
  },
  {
    title: "충청남도",
    value: "충청남도",
    source: require("../../assets/images/chungcheong-south.png"),
  },
  {
    title: "전라북도",
    value: "전라북도",
    source: require("../../assets/images/jeolla-north.png"),
  },
  {
    title: "전라남도",
    value: "전남",
    source: require("../../assets/images/jeolla-south.png"),
  },
  {
    title: "경상북도",
    value: "경상북도",
    source: require("../../assets/images/gyeongsang-north.png"),
  },
  {
    title: "경상남도",
    value: "경상남도",
    source: require("../../assets/images/gyeongsang-south.png"),
  },
  {
    title: "제주도",
    value: "제주특별자치도",
    source: require("../../assets/images/jeju.png"),
  },
];

export const REGION_LAT_LANGS: Record<
  string,
  { latitude: number; longitude: number }
> = {
  서울특별시: {
    latitude: 37.5666103,
    longitude: 126.9783882,
  },
  대전광역시: {
    latitude: 36.3504396,
    longitude: 127.3849508,
  },
  대구광역시: {
    latitude: 35.87139,
    longitude: 128.601763,
  },
  인천광역시: {
    latitude: 37.4559418,
    longitude: 126.7051505,
  },
  부산광역시: {
    latitude: 35.179816,
    longitude: 129.075022,
  },
  울산광역시: {
    latitude: 35.5394773,
    longitude: 129.3112994,
  },
  세종특별자치시: {
    latitude: 36.4803512,
    longitude: 127.2894325,
  },
  제주특별자치도: {
    latitude: 33.4273366,
    longitude: 126.5758344,
  },
  강원도: {
    latitude: 37.8603672,
    longitude: 128.3115261,
  },
  경기도: {
    latitude: 37.4363177,
    longitude: 127.550802,
  },
  경상북도: {
    latitude: 36.6308397,
    longitude: 128.962578,
  },
  경상남도: {
    latitude: 35.4414209,
    longitude: 128.2417453,
  },
  충청북도: {
    latitude: 36.7853718,
    longitude: 127.6551404,
  },
  충청남도: {
    latitude: 36.6173379,
    longitude: 126.8453965,
  },
  전라북도: {
    latitude: 35.6910153,
    longitude: 127.2368291,
  },
  전라남도: {
    latitude: 34.9007274,
    longitude: 126.9571667,
  },
};
