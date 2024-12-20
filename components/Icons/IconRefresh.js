import { motion } from "framer-motion";
import { useState } from "react";

function IconRefresh() {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation((prev) => prev + 360);
  };

  return (
    <motion.svg
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      animate={{ rotate: rotation }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <path
        d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
        fill="#FFF"
        fillRule="nonzero"
        className="w-4 h-4"
        opacity=".5"
      />
    </motion.svg>
  );
}

export default IconRefresh;
