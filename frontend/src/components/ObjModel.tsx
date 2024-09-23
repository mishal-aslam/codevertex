import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion"; // Import Framer Motion hooks
import BNW from "../assets/robot_playground.glb";

function Model(props) {
  const { scene } = useGLTF(BNW);
  const modelRef = useRef();

  // Use scroll progress from Framer Motion
  const { scrollYProgress } = useScroll();
  
  // Faster rotation: Multiply Math.PI * 2 by a factor (e.g., 5) for faster spinning
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 6]); // Faster rotation

  // Apply rotation on every frame based on scroll
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationY.get(); // Set rotation from scroll
    }
  });

  return <primitive object={scene} ref={modelRef} {...props} />;
}

const ObjModel = () => {
  return (
    <div>
        
      <div className=" flex items-center justify-center">
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45, position: [0, 0, 5] }} 
          className="md:mt-[400px] mt-[150px]"
          style={{
            position: "absolute",
            // marginTop: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <color />
          <PresentationControls zoom={0.5} speed={1.5}>
            <Stage environment={"sunset"} intensity={0.5}>
              <Model position={[0, -0.5, 0]}  />{" "}
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
};

export default ObjModel;
