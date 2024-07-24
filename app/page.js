"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { useTime } from "@/hooks/time-hook";
import { useLocation } from "@/hooks/location-hook";

import Quote from "@/components/Quote";
import Dashboard from "@/components/Dashboard";
import ToggleInfo from "@/components/ToggleInfo";
import DetailedInfo from "@/components/DetailedInfo";
import { useRecoilState, useSetRecoilState } from "recoil";
import { timeValueAtom } from "@/atoms/timeValue";
import { locationDataAtom } from "@/atoms/locationData";
import { greetingValueAtom } from "@/atoms/greetingValue";
import { useQuote } from "@/hooks/quote-hook";
import {
  getCurrentTime,
  returnBackgroundImage,
  returnGreeting,
} from "@/utils/time";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(undefined);
  const setGreetingValue = useSetRecoilState(greetingValueAtom);

  const {
    isError: locationError,
    isFetching: locationFetching,
    data: locationData,
  } = useLocation();

  const {
    isError: timeError,
    isFetching: timeFetching,
    data: timeData,
  } = useTime(locationData?.timezone);

  const {
    isError: quoteError,
    isPending: quotePending,
    data: quoteData,
    refetch: quoteRefetch,
  } = useQuote();

  const setLocation = useSetRecoilState(locationDataAtom);
  const [timeInfo, setTimeInfo] = useRecoilState(timeValueAtom);

  useEffect(() => {
    if (timeData) {
      setInterval(() => {
        const api = getCurrentTime(timeData);
        if (api.hours !== timeInfo.hours || api.minutes !== timeInfo.minutes) {
          setTimeInfo({
            time: api?.time,
            abbreviation: api?.abbreviation,
            hours: api?.hours,
            minutes: api?.minutes,
          });
        }
      }, 1000);
    }
  }, [timeData]);

  useEffect(() => {
    locationData &&
      setLocation({
        city: locationData.city,
        countryCode: locationData.countryCode,
      });
  }, [locationData]);

  useEffect(() => {
    if (timeInfo) returnGreeting(timeInfo, setGreetingValue);
  }, [timeInfo, setGreetingValue]);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateDimensions();

    window?.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!returnBackgroundImage(width, timeInfo)?.src)
    return <div className="!fixed inset-0 bg-[#fff] z-50" />;

  return (
    <div
      className={`primary-text mx-5 md:mx-10 lg:mx-0 ${
        timeInfo.hours >= 18 || timeInfo.hours < 5 ? "dark" : "light"
      }`}
    >
      <Image
        className="!fixed inset-0 object-cover -z-50"
        src={returnBackgroundImage(width, timeInfo)?.src}
        alt="Background image"
        fill
      />
      <div className="fixed inset-0 -z-40 bg-black opacity-[50%]" />
      <div className="w-full max-w-[1000px] mx-auto flex flex-col justify-between">
        <AnimatePresence>
          {!toggle && quoteData && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "50vh",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Quote
                isError={quoteError}
                data={quoteData}
                refetch={quoteRefetch}
                isPending={quotePending}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            className="relative flex-col lg:flex-row items-start lg:items-end h-[50vh]"
            animate={{
              display: "flex",
              gap: width >= 1024 ? "0" : width >= 768 ? "5rem" : "2.5rem",
              justifyContent: width >= 1024 ? "space-between" : "flex-end",
              paddingBottom: !toggle || width >= 1024 ? "64px" : "32px",
            }}
            transition={{
              duration: 1,
            }}
          >
            <Dashboard />
            <ToggleInfo toggle={toggle} setToggle={setToggle} />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{
              position: "fixed",
              height: 0,
              bottom: "-50vh",
              left: 0,
              right: 0,
            }}
            animate={{
              height: "50vh",
              bottom: 0,
              left: 0,
              right: 0,
            }}
            exit={{
              position: "fixed",
              height: 0,
              bottom: "-50vh",
              left: 0,
              right: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <DetailedInfo data={timeData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
