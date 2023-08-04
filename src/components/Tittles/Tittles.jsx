const bgURL = "https://i.ibb.co/gFWf1HB/sports-banner.png";

export const HomePageTittles = ({ tittle, subTittle }) => {
  return (
    <div className=" py-10 text-center">
      <h1 className=" mb-1 text-xl lg:text-5xl  font-bold">{tittle}</h1>
      {subTittle? <p>----- {subTittle} ----- </p>:<></>}
    </div>
  );
};

export const OtherPageTittle = ( {tittle,subTittle}) => {
  return (
    <div
      className="relative bg-cover bg-center text-white text-center py-1 lg:py-4 h-[5rem] lg:h-[12rem]"
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <div
        className="absolute inset-0 bg-blur bg-black bg-opacity-60"
        style={{ backdropFilter: "blur(3px)" }}
      ></div>
      <div className="relative">
        <h1 className=" my-1 lg:my-5 text-xl lg:text-5xl font-bold text-white">
          {tittle}
        </h1>
        <h2 className=" text-sm lg:text-xl font-semibold text-white">
          -----  {subTittle}  -----
        </h2>
      </div>
    </div>
  );
};
