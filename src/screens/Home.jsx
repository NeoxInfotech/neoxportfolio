import React from "react";
import lnd from "../assets/lnd.jpg";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import Card from "../components/Card";
import { cardData } from "../data/cards";

const Home = () => {
  return (
    <div>
      <div className="min-h-[80vh] bg-[#F0E9D8] py-8 px-8 flex">
        <div className="min-h-[60vh] w-[50%] flex flex-col items-left justify-center gap-12">
          <h1 className="text-[70px] font-[700]">
            Grow Your Business <br /> With Us{" "}
          </h1>
          <p className="text-[15px] w-[80%]">
            We Neox Infotech Help businesses to grow themselves online, Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Omnis porro
            debitis sint.
          </p>
          <button className="bg-[#F4C33F] py-2 px-4 rounded-xl w-[160px] font-[600] shadow-3xl">
            Explore Us
          </button>
        </div>
        <div className="w-[50%] flex flex-col items-end justify-center gap-12">
          <img src={lnd} alt="" className="min-h-[70vh] w-[80%] rounded-full" />
        </div>
      </div>
      <div className="flex h-[90px] items-center justify-around bg-[#353535]">
        <div className="flex items-center gap-3 text-white">
          <FaReact className="text-[30px] font-[600]" />
          <h3 className="text-[20px] font-[600]">React Js</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <FaNodeJs className="text-[30px] font-[600]" />
          <h3 className="text-[20px] font-[600]">Node Js</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <DiMongodb className="text-[30px] font-[600]" />
          <h3 className="text-[20px] font-[600]">MongoDb</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <RiNextjsLine className="text-[30px] font-[600]" />
          <h3 className="text-[20px] font-[600]">Next Js</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <TbBrandReactNative className="text-[30px] font-[600]" />
          <h3 className="text-[20px] font-[600]">React Native</h3>
        </div>
      </div>
      <div className="flex justify-center min-h-[70vh] py-10 bg-[#F0E9D8] flex-col gap-10">
        <h1 className="text-[40px] font-[800] text-center">
          Manage Your Businesses With Our <br />
          Following Services
        </h1>
        <div className="flex items-center justify-center gap-12">
          {cardData.map((card) => (
            <Card card={card}/>
          ))}
        </div>
      </div>
      <div className="min-h-[70vh] bg-[#F4BC44]">

      </div>
    </div>
  );
};

export default Home;
