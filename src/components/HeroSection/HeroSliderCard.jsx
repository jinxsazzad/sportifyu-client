import React from "react";
import { ActionBtn } from "../Buttons/Buttons";

const HeroSliderCard = ({img,tittle,text}) => {
  return (
    <div className="hero bg-primary h-[80vh] text-white px-6">
      <div className="flex justify-center items-center flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-md" />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">{tittle}</h1>
          <p className="py-4 md:py-6">{text}</p>
          <ActionBtn text="See Classes" />
        </div>
      </div>
    </div>
  );
};

export default HeroSliderCard;
