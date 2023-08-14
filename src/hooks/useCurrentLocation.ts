import { useCallback, useState } from "react";
import { Location } from "../types/common";

const useCurrentLocation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<Location>({
    latitude: 37.555946,
    longitude: 126.972317,
  });
  const [error, setError] = useState<string>("");

  const getCurrentLocation = useCallback(() => {
    setLoading(true);

    const options = {
      enableHighAccuracy: true,
      timeout: Infinity,
      maximumAge: 0,
    };

    const getPosSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setLoading(false);
    };

    const getPosError = () => {
      setError("위치 정보를 가져오는 데 실패하였습니다.");
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(
      getPosSuccess,
      getPosError,
      options,
    );
  }, []);

  return { location, loading, getCurrentLocation, error };
};

export default useCurrentLocation;
