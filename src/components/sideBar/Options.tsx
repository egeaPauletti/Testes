import { motion } from "framer-motion";
import type { OptionProps } from "../../interfaces/interfaces";

const Option = ({ Icon, title, open, isCurrent }: OptionProps) => {
  return (
    <motion.button
      layout
      className={`relative flex h-10 w-full items-center transition-colors cursor-pointer   ${
        isCurrent
          ? "primaryColor border-l-2"
          : "whiteColor opacity-50  hover:text-[#2ea98c]"
      }`}
    >
      <motion.div
        layout
        className=" h-full w-10 flex justify-center items-center"
      >
        {Icon}
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium relative top-[2.5%]"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Option;
