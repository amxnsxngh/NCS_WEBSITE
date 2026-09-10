import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import { benefits } from "../constants/index.js";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath.jsx";

const Benefits = () => {
    // Scroll to the products section


    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl "
                    title="Why NCS Technologia?"
                />
                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item) => (
                        <div
                            key={item.id}
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] ml-auto mr-auto"
                            style={{
                                // Quote SVG data URLs so gradient parentheses remain valid CSS.
                                backgroundImage: `url("${item.backgroundUrl}")`,
                            }}
                        >
                            <div className="relative z-2 flex flex-col min-h-[15rem] p-[2.4rem] pointer-events-none ">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                            </div>
                            {item.light && <GradientLight />}

                            <div
                                className="absolute inset-0.5 bg-n-8"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <ClipPath />
            </div>

        </Section>
    );
};

export default Benefits;
