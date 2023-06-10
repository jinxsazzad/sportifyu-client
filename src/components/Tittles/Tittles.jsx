const bgURL = "https://i.ibb.co/gFWf1HB/sports-banner.png";

export const HomePageTittles = ({ tittle, subTittle }) => {
  return (
    <div className=" py-6 text-center">
      <h1 className=" mb-1 text-3xl lg:text-5xl  font-bold">{tittle}</h1>
      <p> {subTittle} </p>
    </div>
  );
};

export const OtherPageTittle = () => {
  <div
    className="relative bg-cover bg-center text-white text-center py-4"
    style={{ backgroundImage: `url(${bgURL})` }}
  >
    <div
      className="absolute inset-0 bg-blur bg-black bg-opacity-60"
      style={{ backdropFilter: "blur(3px)" }}
    ></div>
    <div className="relative">
      <h1 className=" mb-1 text-5xl font-bold text-white">
        {"[ Popular Sport's Classes ]"}
      </h1>
      <h2 className="text-lg text-white">
        {"Most popular classes are here ! Enrol Now!"}
      </h2>
    </div>
  </div>;
};
