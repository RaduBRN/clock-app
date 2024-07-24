import { locationDataAtom } from "@/atoms/locationData";
import { useRecoilValue } from "recoil";

function Location() {
  const locationData = useRecoilValue(locationDataAtom);

  return (
    <div className="font-bold text-[15px] md:text-2xl uppercase tracking-[4.8px]">
      {`in ${locationData.city}, ${locationData.countryCode}`}
    </div>
  );
}

export default Location;
