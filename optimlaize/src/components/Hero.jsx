import React from "react";

const Hero = ({ title, description, backgroundImage }) => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
                <div className="w-[1000px]">
                    <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
                    <p className="mt-4 text-lg md:text-2xl">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero