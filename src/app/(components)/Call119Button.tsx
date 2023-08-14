import Image from "next/image";
import React from "react";
import phone from "/public/images/phone.svg";

export default function Call119Button() {
  return (
    <a
      className="absolute right-[24px] bottom-[240px] z-[9999] shadow-md rounded-full"
      href="tel:119"
    >
      <Image src={phone} alt="119로 전화하기" height={64} width={64} />
    </a>
  );
}
