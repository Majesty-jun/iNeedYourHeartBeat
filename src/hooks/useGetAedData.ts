import { Location } from "@/types/common";
import axios from "axios";
import { useQuery } from "react-query";

interface getDataProps {
  location: Location;
}

async function getData({ location }: getDataProps) {
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
  return info;
}

const useGetAedData = (location: getDataProps) => {
  return useQuery(["aedData"], async () => getData(location), {
    refetchOnWindowFocus: false,
  });
};

export default useGetAedData;
