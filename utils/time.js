import DayTimeBackground from "../public/assets/desktop/bg-image-daytime.jpg";
import NightTimeBackground from "../public/assets/desktop/bg-image-nighttime.jpg";
import MobileDayTimeBg from "../public/assets/mobile/bg-image-daytime.jpg";
import MobileNightTimeBg from "../public/assets/mobile/bg-image-nighttime.jpg";
import TabletDayTimeBg from "../public/assets/tablet/bg-image-daytime.jpg";
import TabletNightTimeBg from "../public/assets/tablet/bg-image-nighttime.jpg";

function getCurrentTime(timeData) {
  const shortTz = new Date().toLocaleString("en", {
    timeZone: timeData?.timezone,
  });

  const date = new Date(shortTz);
  console.log(date);
  const hours = date.getHours().toString().padStart(2, "T");
  const minutes = date
    .getMinutes()
    .toString()
    .padStart(2, ":")
    .replace(":", "0");

  const formattedTime = `${hours}:${minutes}`;

  return {
    time: formattedTime,
    abbreviation: timeData.abbreviation,
    hours,
    minutes,
  };
}

const returnBackgroundImage = (width, timeInfo) => {
  console.log(timeInfo);
  if (width > 1024) {
    if (timeInfo?.hours >= 18 || timeInfo?.hours <= 5) {
      return NightTimeBackground;
    } else if (timeInfo?.hours <= 18 || timeInfo?.hours >= 5) {
      return DayTimeBackground;
    }
  } else if (width > 768) {
    if (timeInfo?.hours >= 18 || timeInfo?.hours <= 5) {
      return TabletNightTimeBg;
    } else if (timeInfo?.hours <= 18 || timeInfo?.hours >= 5) {
      return TabletDayTimeBg;
    }
  } else {
    if (timeInfo?.hours >= 18 || timeInfo?.hours <= 5) {
      return MobileNightTimeBg;
    } else if (timeInfo?.hours <= 18 || timeInfo?.hours >= 5) {
      return MobileDayTimeBg;
    }
  }

  return undefined;
};

const returnGreeting = (timeInfo, setGreetingValue) => {
  if (timeInfo?.hours >= 5 && timeInfo?.hours < 12) {
    return setGreetingValue("morning");
  } else if (timeInfo?.hours >= 12 && timeInfo?.hours < 18) {
    return setGreetingValue("afternoon");
  } else if (timeInfo?.hours >= 18 || timeInfo?.hours < 5) {
    return setGreetingValue("evening");
  }

  return undefined;
};

export { getCurrentTime, returnBackgroundImage, returnGreeting };
