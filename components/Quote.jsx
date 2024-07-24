"use client";

import IconRefresh from "./Icons/IconRefresh";
import { PiSpinnerGap } from "react-icons/pi";

function Quote({ isError, isPending, data, refetch }) {
  return (
    <div className="h-full pt-16">
      {isPending && <PiSpinnerGap className="text-7xl text-[#909090]" />}
      {isError && (
        <div className="text-red-500 text-2xl">Failed to retrieve quote</div>
      )}
      {data && (
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <span className="w-[550px] text-lg">{data[0]?.content}</span>
            <div onClick={refetch} className="mt-2">
              <IconRefresh />
            </div>
          </div>
          <p className="font-bold text-lg">{data[0]?.author}</p>
        </div>
      )}
    </div>
  );
}

export default Quote;
