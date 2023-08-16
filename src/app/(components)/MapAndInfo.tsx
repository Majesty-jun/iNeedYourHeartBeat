"use client";

import React, { useState, useEffect } from "react";
import { AedInfo } from "@/types/common";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import CurrentLocationButton from "./CurrentLocationButton";
import Map from "./Map";
import Call119Button from "./Call119Button";
import CardList from "./CardList";
import useGetAedData from "@/hooks/useGetAedData";

export default function MapAndInfo() {
  const [aedInfo, setAedInfo] = useState<AedInfo[]>([]);
  const { location, getCurrentLocation, loading, error } = useCurrentLocation();
  const { data } = useGetAedData({ location });

  if (loading) console.log("loading...");
  if (error) console.log(error);

  useEffect(() => getCurrentLocation(), [getCurrentLocation]);
  useEffect(() => setAedInfo(data), [data]);

  return (
    <div>
      <CurrentLocationButton getCurrentLocation={getCurrentLocation} />
      <Map location={location} aedInfo={aedInfo} />
      <Call119Button />
      <CardList aedInfoList={aedInfo} />
    </div>
  );
}
