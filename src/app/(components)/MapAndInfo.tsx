"use client";

import React, { useState, useEffect } from "react";
import { AedInfo } from "@/types/common";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import CurrentLocationButton from "./CurrentLocationButton";
import Map from "./Map";
import Call119Button from "./Call119Button";
import CardList from "./CardList";
import axios from "axios";

export default function MapAndInfo() {
  const [aedInfo, setAedInfo] = useState<AedInfo[]>([]);
  const { location, getCurrentLocation, loading, error } = useCurrentLocation();

  if (loading) console.log("loading...");
  if (error) console.log(error);

  useEffect(() => getCurrentLocation(), [getCurrentLocation]);

  useEffect(() => {
    (async function getData() {
      const queryParams = `?ServiceKey=${process.env.NEXT_PUBLIC_AED_API_KEY}&WGS84_LON=${location.longitude}&WGS84_LAT=${location.latitude}`;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_AED_URL}getAedLcInfoInqire${queryParams}`,
      );
      const items = await res.data.response.body.items.item;
      const info = items.map((item: any) => {
        const {
          buildAddress,
          buildPlace,
          org,
          clerkTel,
          wgs84Lat,
          wgs84Lon,
          rnum,
        } = item;
        return {
          buildAddress,
          buildPlace,
          org,
          clerkTel,
          wgs84Lat,
          wgs84Lon,
          rnum,
        };
      });
      setAedInfo(info);
    })();
  }, [location]);

  return (
    <div>
      <CurrentLocationButton getCurrentLocation={getCurrentLocation} />
      <Map location={location} aedInfo={aedInfo} />
      <Call119Button />
      <CardList aedInfoList={aedInfo} />
    </div>
  );
}
