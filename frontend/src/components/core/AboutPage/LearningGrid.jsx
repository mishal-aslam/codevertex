import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
// framer motion 
import { motion } from "framer-motion";

const wineVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const wineSlideVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
   
const boxVariant2 = {
  scale: {
    scale: 1,
    transition: { duration: 1.2 },
  },
  initial: {
    scale: 0.5,
  },
};
const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <motion.div
            key={i}
            variants={wineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5, direction: 'horizontal' }}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <motion.div
                variants={wineSlideVariant}
                initial="hidden"
                whileInView="visible"
               viewport={{ once: true, amount: 0.5, direction: 'horizontal' }}
                className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0"
              >
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </motion.div>
            ) : (
              <motion.div
                  variants={boxVariant2}
            initial="initial"
            whileInView="scale"
            viewport={{ once: true, amount: 0.5, direction: 'horizontal' }}
                className="p-8 flex flex-col gap-8"
              >
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default LearningGrid;