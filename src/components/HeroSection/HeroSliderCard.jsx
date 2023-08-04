import React from "react";
import { ActionBtn } from "../Buttons/Buttons";

const HeroSliderCard = ({img,tittle,text}) => {
  return (
    <div className="hero bg-primary h-[40vh] lg:h-[80vh] text-white px-6">
      <div className="flex justify-around items-center lg:flex-row-reverse px-10">
        <img src={img} className="hidden lg:block max-w-md" />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold mb-10">{tittle}</h1>
          <p className="py-4 hidden lg:block md:py-6">{text}</p>
          <ActionBtn text="See Classes" />
          <button className="ms-1 lg:ms-2 btn btn-outline text-black hover:bg-orange-500 hover:text-white" >Booked Class</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderCard;
