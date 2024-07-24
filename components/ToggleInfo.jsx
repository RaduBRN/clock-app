import IconArrow from "./Icons/IconArrow";

function ToggleInfo({ toggle, setToggle }) {
  function handleClick() {
    setToggle((prev) => !prev);
  }

  return (
    <button
      onClick={handleClick}
      className="absolute md:static bottom-[5vh] px-3 md:px-4 pr-1 md:pr-2 py-1 md:py-2 bg-[#fff] rounded-[32px] flex justify-center items-center gap-2"
    >
      <p className="text-[12px] md:text-base font-bold text-[#000] tracking-[5px] uppercase text-opacity-50">
        {toggle ? "Less" : "More"}
      </p>
      <div className="w-8 md:w-10 h-8 md:h-10 bg-[#303030] rounded-full flex items-center justify-center hover:bg-[#999]">
        <IconArrow toggle={toggle} />
      </div>
    </button>
  );
}

export default ToggleInfo;
