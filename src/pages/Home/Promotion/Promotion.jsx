import image1 from "../../../assets/Images/logo.png";
import { HomePageTittles } from "../../../components/Tittles/Tittles";
const Promotion = () => {
  return (
    <section className=" py-8">
        <HomePageTittles tittle={"[ We Will Help You Achieve Your Goal ]"}/>
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">
            <img src="https://www.lifetime.life/content/dam/sport/images/uhoops/bain20327549-card-bball-coaching-drill-bg-02.jpg.transform/r959/img.jpg" alt="" />
          </div>
          <div className="bg-white p-4 shadow-md flex justify-center items-center">
            <div>
            <h2 className="text-5xl font-bold mb-2 text-center">1</h2>
            <p className="text-gray-600 p-4 text-center">
              Our teachers are in the water with their students, figuring out
              what each kid needs to learn
            </p>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md flex justify-center items-center">
            <div>
            <h2 className="text-5xl font-bold mb-2 text-center">1</h2>
            <p className="text-gray-600 p-4 text-center">
              Our teachers are in the water with their students, figuring out
              what each kid needs to learn
            </p>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md flex justify-center items-center">
            <div>
            <h2 className="text-5xl font-bold mb-2 text-center">1</h2>
            <p className="text-gray-600 p-4 text-center">
              Our teachers are in the water with their students, figuring out
              what each kid needs to learn
            </p>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md flex justify-center items-center">
            <div>
            <h2 className="text-5xl font-bold mb-2 text-center">1</h2>
            <p className="text-gray-600 p-4 text-center">
              Our teachers are in the water with their students, figuring out
              what each kid needs to learn
            </p>
            </div>
          </div>
          
          <div className="bg-white p-4 shadow-md">
            <img src="https://internationalfootball.academy/wp-content/uploads/football-news-10.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
