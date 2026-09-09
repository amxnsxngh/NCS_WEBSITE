import React from 'react'
import Section from "./Section.jsx";

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 text-center lg:block">
                    N.C.S Technologia | © {new Date().getFullYear()}. All Rights Reserved.
                </p>
            </div>
        </Section>
    )
}

export default Footer;


