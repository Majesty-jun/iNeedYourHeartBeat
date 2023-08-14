"use client";

import React, { useEffect, useState } from "react";
import { AedInfo, Location } from "@/types/common";

interface Props {
  location: Location;
  aedInfo: AedInfo[];
}

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map({ location, aedInfo }: Props) {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOptions = {
          center: new kakao.maps.LatLng(37.1660053, 127.1324295),
          level: 3,
        };
        setMap(new kakao.maps.Map(mapContainer, mapOptions));
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  useEffect(() => {
    const { kakao } = window;
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    const positions = aedInfo.map((info) => {
      const { org, wgs84Lat, wgs84Lon } = info;
      return {
        title: org,
        latlng: new kakao.maps.LatLng(wgs84Lat, wgs84Lon),
      };
    });
    positions.forEach((position) => {
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      const markers = new kakao.maps.Marker({
        map,
        position: position.latlng,
        title: position.title,
        image: markerImage,
      });
      markers.setMap(map);
    });
  }, [aedInfo, map]);

  useEffect(() => {
    const { kakao } = window;
    map?.setCenter(
      new kakao.maps.LatLng(location.latitude, location.longitude),
    );
  }, [location, map]);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "100vh" }} />
    </div>
  );
}
