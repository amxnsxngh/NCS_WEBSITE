import React, { Suspense} from 'react';
import Section from './Section.jsx';
import { curve } from "../assets/index.js";

import {BackgroundCircles, BottomLine} from "./design/Hero.jsx";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ThreeD from "./ThreeD.jsx";
import CanvasLoader from "./CanvasLoader.jsx";
import { Leva } from "leva";
import ModelCamera from "./ModelCamera.jsx";

const Hero = () => {

    return (
        <Section className="pt-[6.9rem] -mt-[5.25rem] dark-gradient "
                 crosses
                 crossesOffset="lg:translate-y-[5.25rem]"
                 customPaddings
                 id="hero"
        >
            <div className="container relative">

                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[4.25rem]">
                    <h1 className="h1 mb-6">
                        Elevate Your Printing Experience with&nbsp;
                        <span className="inline-block relative">
                            N.C.S Technologia{""}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>

                    </h1>
                </div>

                <div className="relative z-49 max-w-[23rem] mx-auto md:max-w-5xl  h-[490px] py-2 ">
                    <Leva />

                    <Canvas className="w-full h-full  px-7">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                            <ModelCamera>
                                <ThreeD
                                    position={[0, 0, 0]}
                                    rotation={[90 * (Math.PI / 180), 0, 0]}
                                    scale={[89, 89, 89]}
                                />
                            </ModelCamera>
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[0, 0, 10]} intensity={1} />
                        </Suspense>
                    </Canvas>
                    <BackgroundCircles/>
                </div>

            </div>

            <BottomLine />
        </Section>
    );
};

export default Hero;
