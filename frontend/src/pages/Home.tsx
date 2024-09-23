import React from "react";
import { Features } from "../sections/Features";
import { Hero } from "../sections/Hero";
import CodeBlocks2 from "../sections/CodeBlock2";
import { CallToAction } from "../sections/CallToAction";
import UnlockCode from "../sections/UnlockCode";
import { Testimonials } from "../sections/Testimonials";
import { FAQs } from "../sections/FAQs";

export const Home = () => {
  return (
    <>
      {/* <div className={twMerge("bg-black text-white antialiased")}> */}
      <div className="bg-black text-white">
        <Hero />
        <UnlockCode />
        <CodeBlocks2 />
        <CallToAction />
        <Features />
        <Testimonials />
        <FAQs />
      </div>
    </>
  );
};
