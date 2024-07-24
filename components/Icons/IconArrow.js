import { motion } from "framer-motion";

function IconArrow({ toggle }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: !toggle ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      className="w-[10px] md:w-[14px] h-[6.5px] md:h-[9px]"
      viewBox="0 0 14 9"
    >
      <path stroke="#FFF" strokeWidth="2" fill="none" d="m1 1 6 6 6-6" />
    </motion.svg>
  );
}

export default IconArrow;
