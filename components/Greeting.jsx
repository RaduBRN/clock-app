import { useRecoilValue } from "recoil";
import IconMoon from "./Icons/IconMoon";
import IconSun from "./Icons/IconSun";
import { greetingValueAtom } from "@/atoms/greetingValue";

const greetings = {
  morning: {
    icon: <IconSun />,
    message: "Good morning",
  },
  afternoon: {
    icon: <IconSun />,
    message: "Good afternoon",
  },
  evening: {
    icon: <IconMoon />,
    message: "Good evening",
  },
};

function Greeting() {
  const greetingValue = useRecoilValue(greetingValueAtom);

  return (
    <div className="flex gap-2 items-center">
      {greetings[greetingValue]?.icon}
      <p className="text-[#fff] text-sm md:text-base lg:text-xl tracking-[4px] uppercase">
        {greetings[greetingValue]?.message}
        <span className="hidden md:inline-block">, it's currently</span>
      </p>
    </div>
  );
}

export default Greeting;
