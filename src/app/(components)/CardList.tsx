import React from "react";
import { AedInfo } from "@/types/common";
import Card from "./Card";

interface Props {
  aedInfoList: AedInfo[];
}

export default function CardList({ aedInfoList }: Props) {
  return (
    <ul className="w-full absolute bottom-[10px] z-[9999] p-0 flex flex-nowrap overflow-auto scrollbar-hide">
      {aedInfoList.map((info) => (
        <Card aedInfo={info} key={info.rnum} />
      ))}
    </ul>
  );
}
