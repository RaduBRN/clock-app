function DetailedInfo({ data }) {
  return (
    <div className="flex justify-between items-center bg-white/75 dark:bg-black/75 backdrop-blur h-full">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row text-[#303030] dark:text-white lg:divide-x lg:divide-[#303030] lg:divide-opacity-25 max-w-[1000px] mx-5 md:mx-16 lg:mx-auto w-full">
        <div className="flex flex-col gap-4 md:gap-12 lg:gap-4 md:pr-[12.5%]">
          <div className="flex items-center justify-between md:block">
            <p className="uppercase text-[10px] md:text-[13px] lg:text-[15px] tracking-[2px] md:tracking-[3px] text-nowrap">
              Current Timezone
            </p>
            <h2 className="font-bold text-[20px] md:text-[40px] lg:text-[56px]">
              {data?.timeZone}
            </h2>
          </div>
          <div className="flex items-center justify-between md:block">
            <p className="uppercase text-[10px] md:text-[13px] lg:text-[15px] tracking-[2px] md:tracking-[3px] text-nowrap">
              Day of the month
            </p>
            <h2 className="font-bold text-[20px] md:text-[40px] lg:text-[56px]">
              {data?.day}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-12 lg:gap-4 justify-center md:pl-[12.5%]">
          <div className="flex items-center justify-between md:block">
            <p className="uppercase text-[10px] md:text-[13px] lg:text-[15px] tracking-[2px] md:tracking-[3px] text-nowrap">
              Day of the Week
            </p>
            <h2 className="font-bold text-[20px] md:text-[40px] lg:text-[56px]">
              {data?.dayOfWeek}
            </h2>
          </div>
          <div className="flex items-center justify-between md:block">
            <p className="uppercase text-[10px] md:text-[13px] lg:text-[15px] tracking-[2px] md:tracking-[3px] text-nowrap">
              Month number
            </p>
            <h2 className="font-bold text-[20px] md:text-[40px] lg:text-[56px]">
              {data?.month}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedInfo;
