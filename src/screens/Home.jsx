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
import neoxlogo from "../assets/neox-full.png"
import { slidercards } from "../data/sliderCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [types] = useTypewriter({
    words: ["Web Development Services", "Andriod Development Services", "Desktop Applications", "Graphic Design", "2D Animation"],
    loop: {}
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-[#F0E9D8]">
      <div className="min-h-[80vh] bg-[#F0E9D8] py-8 px-8 flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="min-h-[60vh] w-[100%] md:w-[50%] flex flex-col items-left justify-center gap-6 md:gap-8">
          {/* <img src={neoxlogo} alt="" className="h-[90px] w-[90px]" /> */}
          <h1 className="text-[35px] md:text-[60px] lg:text-[70px] leading-11 font-[700] text-center md:text-start">
            Grow Your Business With Us{" "}
          </h1>
          <h1 className="text-[30px] flex flex-col items-center lg:flex-row md:text-[40px] leading-11 font-[700]">
            We Provide -
            <span className="text-[15px] sm:text-[30px]" style={{ fontWeight: "bold", color: "#315781" }}>
              {types}
              <span><Cursor /></span>
            </span>

          </h1>
          <p className="text-[15px] w-[100%] md:w-[80%]">
            We at Neox Infotech Help businesses to grow themselves online, Neox Provides best Web development, app development, desktop apps and digital marketing services.
          </p>
          <button className="bg-[#F4C33F] py-2 px-4 rounded-xl w-[160px] font-[600] shadow-3xl">
            Explore Us
          </button>
        </div>
        <div className="w-[100%] md:w-[50%] flex flex-col items-center md:items-end justify-center ">
          <img src={lnd} alt="" className="min-h-[20vh] w-[80%] rounded-full" />
        </div>
      </div>
      <div className="flex min-h-[90px] items-center justify-around flex-wrap bg-[#353535]">
        <div className="flex items-center gap-3 text-white">
          <FaReact className=" md:text-[20px] lg:text-[30px] font-[600]" />
          <h3 className=" text-[13px] md:text-[20px] font-[600]">React Js</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <FaNodeJs className="md:text-[20px] lg:text-[30px] font-[600]" />
          <h3 className="text-[13px] md:text-[20px] font-[600]">Node Js</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <DiMongodb className="md:text-[20px] lg:text-[30px] font-[600]" />
          <h3 className="text-[13px] md:text-[20px] font-[600]">MongoDb</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <RiNextjsLine className="md:text-[20px] lg:text-[30px]font-[600]" />
          <h3 className="text-[13px] md:text-[20px] font-[600]">Next Js</h3>
        </div>
        <div className="flex items-center gap-3 text-white">
          <TbBrandReactNative className="md:text-[20px] lg:text-[30px] font-[600]" />
          <h3 className="text-[13px] md:text-[20px] font-[600]">React Native</h3>
        </div>
      </div>
      <div className="flex justify-center min-h-[70vh] py-10 bg-[#F0E9D8] flex-col gap-10">
        <h1 className="text-[30px] md:text-[40px] font-[800] text-center">
          Manage Your Businesses With Our <br />
          Following Services
        </h1>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {cardData.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
      <div className="min-h-[70vh] bg-[#F4BC44] flex flex-col md:flex-row items-center">
        <div className="left w-[100%] md:w-[50%] h-[100%] flex items-end justify-bottom">
          <img src={aboutimg} alt="" className="h-[80%]" />
        </div>
        <div className="left w-[100%] md:w-[50%] h-[100%] flex items-start justify-center gap-10 flex-col px-8 py-6">
          <h1 className="text-white font-[900] text-[60px]">Why Us</h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <h2 className="text-[50px] font-bold"> 5+</h2>
              <span className=" text-[30px] font-bold">Years Experience</span>
            </div>
            <p className="text-[15px] w-[100%] md:w-[75%]">
              Neox Infotech is a leading IT solutions provider committed to offering comprehensive technology services. With years of experience and a passion for technology, we strive to deliver top-notch solutions that cater to the unique needs of our clients. Our mission is to empower businesses by leveraging the latest technology and best practices in the industry.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <h2 className="text-[50px] font-bold"> Our Mission</h2>
            </div>
            <p className="text-[15px]  w-[100%] md:w-[75%]">
              Our mission is simple: to empower businesses with cutting-edge web solutions that drive growth and success. We believe in the power of technology to transform businesses, and we are committed to helping you leverage the latest web trends and technologies to achieve your goals.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <h2 className="text-[50px] font-bold"> What We Do</h2>
            </div>
            <p className="text-[15px]  w-[100%] md:w-[75%]">
              Web Design: Our design team creates visually appealing and user-friendly websites tailored to your brand’s identity and audience.
              Web Development: We develop robust, scalable, and secure websites using the latest technologies to ensure optimal performance and reliability.
              E-commerce Solutions: From simple online stores to complex e-commerce platforms, we provide solutions that drive sales and enhance customer experience.
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
      <div className="clients flex items-center justify-center flex-col gap-10 min-h-[80vh] py-6 px-8">
        <h1 className="text-[40px] font-bold text-center">What Our Clients have to say</h1>
        <div className="min-h-[40vh] w-[80%] md:w-[75%]">
          <Slider {...settings}>
            {
              slidercards.map((e) => (
                <SliderCards e={e} />
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
