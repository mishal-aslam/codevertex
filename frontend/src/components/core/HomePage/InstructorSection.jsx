import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
import { motion } from "framer-motion";

const boxVariant2 = {
  scale: { 
    scale: 1, 
    transition: { duration: 1.2 } 
  },
  initial: { 
    scale: 0.5
  }
};
   
const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
          variants={boxVariant2}
          initial="initial"
          whileInView="scale"
          viewport={{ once: true, amount: 0.5, direction: 'down' }}
          className="lg:w-[50%]">
            <img
              src={Instructor}
              alt=""
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </motion.div>


          <motion.div
           variants={boxVariant2}
           initial="initial"
           whileInView="scale"
           viewport={{ once: true, amount: 0.5, direction: 'down' }}
           className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Become an
              <HighlightText text={"instructor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-gray-300">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default InstructorSection