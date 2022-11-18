import React, { useEffect, useRef } from "react";

const { kakao } = window;

const Map = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const container = ref.current;
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export { Map };
