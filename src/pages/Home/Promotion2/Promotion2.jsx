import React, { useState } from "react";
import { HomePageTittles } from "../../../components/Tittles/Tittles";

const Promotion2 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className="py-10 container mx-auto">
      <HomePageTittles tittle={"What Makes Different From the Others"}/>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-5">
        <div className="container mx-auto px-4 md:col-span-2 flex flex-col">
          <div className="flex flex-col  lg:flex-row justify-center gap-2">
            <button
              className={`text-xl px-6 py-2 rounded-t-lg ${
                activeTab === 1
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary"
              } transition-all duration-300`}
              onClick={() => handleTabClick(1)}
            >
              Learn while having fun
            </button>
            <button
              className={`text-xl px-6 py-2 rounded-t-lg ${
                activeTab === 2
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary"
              } transition-all duration-300`}
              onClick={() => handleTabClick(2)}
            >
              Small classes
            </button>
            <button
              className={`text-xl px-6 py-2 rounded-t-lg ${
                activeTab === 3
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary"
              } transition-all duration-300`}
              onClick={() => handleTabClick(3)}
            >
              Great instructor
            </button>
          </div>
          <div className="mt-1 p-4 bg-white shadow-md flex-1">
            {activeTab === 1 && (
              <p>
                <span className="font-bold">Learn while having fun:</span> The
                priority in our school is taking care of the health and safety
                of users and learning through fun. That is why parents are so
                eager to enroll their children in our school. We understand that
                as a parent, your child's safety is paramount. At Swim Academy,
                we believe your swimmers deserve to be in the best hands at all
                times, which is why our instructors go through an extensive
                recruitment process and a comprehensive training period. In
                addition, we always try to keep our classes small and provide a
                maximum number of instructors.
              </p>
            )}
            {activeTab === 2 && (
              <p>
                <span className="font-bold">Small classes:</span> The priority
                in our school is taking care of the health and safety of users
                and learning through fun. That is why parents are so eager to
                enroll their children in our school. We understand that as a
                parent, your child's safety is paramount. At Swim Academy, we
                believe your swimmers deserve to be in the best hands at all
                times, which is why our instructors go through an extensive
                recruitment process and a comprehensive training period. In
                addition, we always try to keep our classes small and provide a
                maximum number of instructors.
              </p>
            )}
            {activeTab === 3 && (
              <p>
                <span className="font-bold">Great instructor:</span> The
                priority in our school is taking care of the health and safety
                of users and learning through fun. That is why parents are so
                eager to enroll their children in our school. We understand that
                as a parent, your child's safety is paramount. At Swim Academy,
                we believe your swimmers deserve to be in the best hands at all
                times, which is why our instructors go through an extensive
                recruitment process and a comprehensive training period. In
                addition, we always try to keep our classes small and provide a
                maximum number of instructors.
              </p>
            )}
          </div>
        </div>
        <div className="flex md:col-span-2 avatar h-[50vh]">
          <img
            src="https://quanticalabs.com/wp_themes4/swimacademy/wp-content/uploads/sites/3/2021/05/image_31.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Promotion2;
