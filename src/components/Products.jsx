import React, { useState } from 'react';
import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import { check } from "../assets/index.js";
import {
    solventBasedInkServices,
    waterBasedInkServices,
    uvFlexoInkServices
} from "../constants/index.js";
import {BottomLine} from "./design/Hero.jsx";

const Products = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <Section id="products-section">
            <div className="container">
                <Heading
                    title="Our Range of Premium Printing Inks"
                    text="WHERE INNOVATION MEETS EXCELLENCE"
                />
                <div className="relative flex justify-center gap-8 flex-wrap">
                    {/* Solvent Based Inks */}
                    <div
                        className={`relative z-1 max-w-[17rem] p-8 border-2 border-cyan-500 rounded-3xl text-center transition-transform duration-300 ease-in-out hover:scale-105`}
                        onMouseEnter={() => setHoveredCard('solvent')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <h4 className="h-4 mb-4">Solvent Based Inks</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Our solvent-based inks deliver exceptional adhesion, durability, vibrant color, and consistency for long-lasting applications.
                        </p>
                        <ul className="body-2">
                            {solventBasedInkServices.map((item, index) => (
                                <li key={index} className="flex items-start py-4 border-t border-n-6">
                                    <img src={check} width={24} height={24} />
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Water Based Inks */}
                    <div
                        className={`relative z-1 max-w-[17rem] p-8 border-2 border-[#D5006B] rounded-3xl text-center transition-transform duration-300 ease-in-out hover:scale-105`}
                        onMouseEnter={() => setHoveredCard('water')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <h4 className="h-4 mb-4">Water Based Inks</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Our water-based inks offer eco-friendly solutions with fast drying and low odor, perfect for sustainable printing applications.
                        </p>
                        <ul className="body-2">
                            {waterBasedInkServices.map((item, index) => (
                                <li key={index} className="flex items-start py-4 border-t border-n-6">
                                    <img src={check} width={24} height={24} />
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* UV Flexo Printing Inks */}
                    <div
                        className={`relative z-1 max-w-[17rem] p-8 border-2 border-yellow-500 rounded-3xl text-center transition-transform duration-300 ease-in-out hover:scale-105`}
                        onMouseEnter={() => setHoveredCard('uv')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <h4 className="h-4 mb-4">UV Flexo Printing Inks</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Our UV Flexographic inks provide quick curing, high resistance, and excellent print definition for premium quality results.
                        </p>
                        <ul className="body-2">
                            {uvFlexoInkServices.map((item, index) => (
                                <li key={index} className="flex items-start py-4 border-t border-n-6">
                                    <img src={check} width={24} height={24} />
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <BottomLine/>
        </Section>
    );
};

export default Products;
