import React from 'react'
import aboutbg from "../assets/about-bg.png"

const About = () => {
    return (
        <div className='min-h-[90vh] bg-[#F0E9D8] flex flex-col md:flex-row '>
            <div className="left w-[100%] md:w-[50%]">
                <img src={aboutbg} alt="" />
            </div>
            <div className="right w-[100%] md:w-[50%] flex flex-col items-center justify-center gap-6">
                <h1 className='text-[40px] font-[700]'>About Us</h1>
                <p className='w-[80%]'>Who We Are
                    At Neox Infotech? <br /> We are a passionate team of designers, developers, and strategists dedicated to bringing your digital vision to life. With a focus on creativity and functionality, we craft websites that not only look stunning but also deliver exceptional user experiences.

                    Our Mission <br />
                    Our mission is simple: to empower businesses with cutting-edge web solutions that drive growth and success. We believe in the power of technology to transform businesses, and we are committed to helping you leverage the latest web trends and technologies to achieve your goals.
                </p>
                <ul className='list-disc'>
                    <li>Integrity: We believe in honesty and transparency in all our dealings.</li>
                    <li>Excellence: We strive for excellence in everything we do, delivering top-notch solutions that exceed expectations.</li>
                    <li>Collaboration: We value collaboration and work as a seamless extension of your team.</li>
                    <li>Customer Satisfaction: Your success is our success. We are dedicated to achieving complete customer satisfaction.</li>
                </ul>
            </div>
        </div>
    )
}

export default About
