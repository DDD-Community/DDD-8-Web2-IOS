import React, { useEffect, useRef } from "react";
import { markerList } from "../../dummydata/markers";

const { kakao } = window;

export default function Map() {
  const ref = useRef();
  let map = null;

  useEffect(() => {
    if (ref.current) {
      mapScript();
    }
  }, []);

  const mapScript = () => {
    const container = ref.current;
    const options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 3,
    };
    map = new kakao.maps.Map(container, options);
    drawMarker();
  };
  const drawMarker = () => {
    console.log(markerList);
    markerList.forEach((el) => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
    // //마커가 표시 될 위치
    // let markerPosition = options.center;

    // // 마커를 생성
    // let marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });

    // 마커를 지도 위에 표시
    // marker.setMap(map);
  };
  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
