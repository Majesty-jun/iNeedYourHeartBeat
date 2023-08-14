import Image from "next/image";
import React from "react";
import location from "/public/images/location.svg";

export default function CurrentLocationButton({
  getCurrentLocation,
}: {
  getCurrentLocation: () => void;
}) {
  return (
    <button className="absolute right-[24px] bottom-[320px] z-[9999] shadow-md rounded-full">
      <Image src={location} alt="현재위치 불러오기" width={64} height={64} />
    </button>
  );
}
