import { timeValueAtom } from "@/atoms/timeValue";
import { useRecoilValue } from "recoil";

function Time() {
  const timeInfo = useRecoilValue(timeValueAtom);

  return (
    <div className="flex gap-3 items-end">
      <p className="font-bold text-[100px] md:text-[200px] tracking-[-5px] leading-none">
        {timeInfo.time}
      </p>
      <p className="font-light text-[15px] md:text-4xl md:mb-5 mb-2">
        {timeInfo.abbreviation}
      </p>
    </div>
  );
}

export default Time;
