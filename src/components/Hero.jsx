import React from 'react';
import { ReactTyped } from "react-typed";
import climateChange from "../Assets/images/Hero_image.jpg";

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${climateChange})` }}>
            {/* Overlay for darker background effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full">
                <div className="ml-24 w-1/2 mt-5">
                    <h1 className="text-5xl font-semi-bold leading-normal px-2 text-white">
                        We’re Using Tech for Behavioral Change to Impact
                    </h1>

                    <ReactTyped className="text-5xl font-bold leading-normal px-2 text-white" strings={["Climate Change...","Environment Change...","Human Impact..."]} typeSpeed={90} backSpeed={100} loop />
                    <br />

                    {/* <ReactTyped className="text-5xl font-semi-bold leading-normal px-2 text-white"
                        strings={[
                            "Climate Change",
                            "Environment Change",
                            "Human",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" />
                    </ReactTyped> */}


                    {/* <ReactTyped strings={["Climate Change", "Environment Change", "Human Impact"]} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    attr="placeholder" 
                    loop /> */}
                    <button className="bg-green-700 py-3 px-6 text-white font-base rounded-lg my-5 mx-2">
                        Learn how
                    </button>
                </div>

                <div className="flex flex-row justify-center w-auto justify-between space-x-4 ml-24 mr-24 my-12 p-5 gap-5 rounded-lg bg-green-800 bg-opacity-50">
                    <div>
                        <h2 className="text-4xl text-white mb-3 font-bold">60%</h2>
                        <h3 className="text-xl text-white">Climate Change</h3>
                        <p className="text-sm my-4 text-white font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem voluptatibus officia dolore atque. Officiis nulla dolores hic.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl text-white mb-3 font-bold">40%</h2>
                        <h3 className="text-xl text-white">Environment Change</h3>
                        <p className="text-sm my-4 text-white font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem voluptatibus officia dolore atque. Officiis nulla dolores hic.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl text-white mb-3 font-bold">20%</h2>
                        <h3 className="text-xl text-white">Human Impact</h3>
                        <p className="text-sm my-4 text-white font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem voluptatibus officia dolore atque. Officiis nulla dolores hic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
