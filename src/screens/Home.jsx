import React from "react";
import lnd from "../assets/lnd.jpg";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import Card from "../components/Card";
import { cardData } from "../data/cards";
import aboutimg from "../assets/aboutimg.png";
import client from "../assets/client.jpg"
import SliderCards from "../components/SliderCards";
import Slider from "react-slick";
import { slidercards } from "../data/sliderCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
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
            <Card card={card} />
          ))}
        </div>
      </div>
      <div className="min-h-[70vh] bg-[#F4BC44] flex flex-col md:flex-row items-center">
        <div className="left w-[100%] md:w-[50%] h-[100%] flex items-end justify-bottom">
          <img src={aboutimg} alt="" className="h-[80%]" />
        </div>
        <div className="left w-[100%] md:w-[50%] h-[100%] flex items-center justify-center gap-10 flex-col px-8 py-6">
          <h1 className="text-white font-[900] text-[60px]">Why Us</h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <h2 className="text-[50px] font-bold"> 5+</h2>
              <span className="font-bold">Years Experience</span>
            </div>
            <p className="text-[13px] w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              doloribus, dolor fuga consectetur doloremque at blanditiis minima
              quisquam nulla officia rerum ex dicta! Delectus repellat quaerat
              voluptatibus, distinctio aut sapiente!
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <h2 className="text-[50px] font-bold"> 5+</h2>
              <span className="font-bold">Years Experience</span>
            </div>
            <p className="text-[13px] w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              doloribus, dolor fuga consectetur doloremque at blanditiis minima
              quisquam nulla officia rerum ex dicta! Delectus repellat quaerat
              voluptatibus, distinctio aut sapiente!
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <h2 className="text-[50px] font-bold"> 5+</h2>
              <span className="font-bold">Years Experience</span>
            </div>
            <p className="text-[13px] w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              doloribus, dolor fuga consectetur doloremque at blanditiis minima
              quisquam nulla officia rerum ex dicta! Delectus repellat quaerat
              voluptatibus, distinctio aut sapiente!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="min-h-[80vh] bg-[#F0E9D8]">
        <h1>PROJECTS</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[50%] flex flex-col items-left justify-center gap-5">
            <h1 className="text-[30px] font-[800]">Project Name</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              aliquid laboriosam corrupti blanditiis veritatis ab quod ad amet
              id accusamus omnis odit, sunt, unde autem ipsum voluptates
              pariatur eligendi molestiae mollitia nulla modi. Similique ut
              magni nemo tempore excepturi consectetur.
            </p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div> */}
      <div className="clients flex items-center justify-center flex-col gap-10 min-h-[80vh]">
        <h1 className="text-[40px] font-bold">What Our Clients have to say</h1>
        <div className="min-h-[40vh] w-[90%] md:w-[75%]">
<Slider {...settings}>
      {
        slidercards.map((e)=>(
          <SliderCards e={e}/>
        ))
      }
</Slider>
        </div>
      </div>
      <div className="contact"></div>
    </div>
  );
};

export default Home;
