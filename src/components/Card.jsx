import React from "react";

const Card = ({ card }) => {
  return (
    <div key={card.id} style={{ backgroundColor: card.bg }} className={`min-h-[350px] w-[90%] sm:w-[80%] md:w-[40%] lg:w-[25%]  rounded-md hover:shadow-3xl flex flex-col items-left px-3 py-5 gap-10`}>
      <div className=" h-[50px] w-[50px] mx-5 mt-5">
        <img src={card.ico} alt="" className="h-full" />
      </div>

      <h2 className="text-[32px] font-[800]">{card.head}</h2>
      <span className="text-[15px]">{card.text}</span>
    </div>
  );
};

export default Card;
