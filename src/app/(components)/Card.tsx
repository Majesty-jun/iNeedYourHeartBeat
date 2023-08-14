import React from "react";
import { AedInfo } from "@/types/common";

interface Props {
  aedInfo: AedInfo;
}

export default function Card({ aedInfo }: Props) {
  return (
    <li className="w-full h-[200px] max-w-[400px] p-[40px] mx-[10px] rounded-md flex flex-col flex-nowrap justify-evenly items-start shrink-0 bg-white shadow-md">
      <h2 className="text-[24px] font-bold">{aedInfo.org}</h2>
      <h3 className="text-[20px]">{aedInfo.buildPlace}</h3>
      <a href={`tel:${aedInfo.clerkTel}`}>☎️ {aedInfo.clerkTel}</a>
      <h3 className="width-[80%] truncate">{aedInfo.buildAddress}</h3>
    </li>
  );
}
