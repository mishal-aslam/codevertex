import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";
// framer motion 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant2 = {
  scale: { 
    scale: 1, 
    transition: { duration: 1.2 } 
  },
  initial: { 
    scale: 0
  }
};

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <motion.div
    variants={boxVariant2}
  initial="initial"
  whileInView="scale"
  viewport={{ once: true, amount: 0.5, direction: 'down' }}
  
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-[#2F343A]"
      }  text-gray-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-gray-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-gray-800"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-gray-400">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-gray-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;