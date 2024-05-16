import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";

const CategoryTemplate = () => {
  // this usestate sets index of carousel images
  const [currentIndex, setCurrentIndex] = useState(0);
  //this useState sets array of images
  const imagesArrayUrls = [
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1712642472/Tale%20Blazers/tarot-cards-profile-pic_fv6p7p.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1711650725/chartd_qlhbgr.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1711649108/colal-jpg_jzmskc.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1711416478/CourseQuest%20-%20App/circuit_board_pic_kgsrqb.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1706632712/Daily%20Spark%20-%20Landing%20Page%20Landscape%20Photos/vibrant-orange-landscape-of-sand-dunes-and-trees_e96ilu.jpg",
  ];

  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        //check if previous index is 0, if it is set currentIndex to the length of allstoryEndings minus one
        prevIndex === 0 ? imagesArrayUrls.length - 1 : prevIndex - 1
      // else decrease currentIndex by one
    );
  };

  const goToNextImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        //check if previous index is equal to length of allStoryendings minus one, if yes set CurrenIndex to zero
        prevIndex === imagesArrayUrls.length - 1 ? 0 : prevIndex + 1
      //else increase currentindex by 1
    );
  };

  return (
    <div className="min-h-screen mb-0">
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="bg-amber-400 col-span-1 md:col-span-3">
          <div className=" bg-violet-500 m-5 rounded-xl overflow-y-auto h-3/4">
            <div className="text-4xl mt-10 mx-5 mb-3">Waste Category</div>
            <hr className="border-4 border-black mb-10 mx-5 rounded" />
            <div className=" mx-5 rounded-2xl">
              <div className="flex justify-around">
                <button
                  onClick={goToPreviousImage}
                  className="hover:text-zinc-100"
                >
                  <CircleChevronLeft size={56} />
                </button>
                <div className="flex justify-center">
                  <img
                    src={imagesArrayUrls[currentIndex]}
                    alt="image_of_waste"
                    className="h-96 w-140 rounded-lg"
                  />
                </div>
                <button onClick={goToNextImage} className="hover:text-zinc-100">
                  <CircleChevronRight size={56} />
                </button>
              </div>
            </div>
            <div className="text-3xl mx-5 mt-10">
              What Can & What Can't Be Dropped Off
            </div>
            <hr className="flex border-2 border-slate-900 mx-5 rounded" />
            <div className="p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos aut odio cumque minus necessitatibus voluptates
              excepturi illo veniam? Dicta sed distinctio, eveniet provident
              suscipit soluta minus iure hic fugit molestias? What Can & What
              Can't Be Drop OffWhat Can & What Can't Be Drop Off Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Dignissimos aut odio
              cumque minus necessitatibus voluptates excepturi illo veniam?
              Dicta sed distinctio, eveniet provident suscipit soluta minus iure
              hic fugit molestias? What Can & What Can't Be Drop OffWhat Can &
              What Can't Be Drop Off Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dignissimos aut odio cumque minus necessitatibus
              voluptates excepturi illo veniam? Dicta sed distinctio, eveniet
              provident suscipit soluta minus iure hic fugit molestias? What Can
              & What Can't Be Drop OffWhat Can & What Can't Be Drop Off Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
              aut odio cumque minus necessitatibus voluptates excepturi illo
              veniam? Dicta sed distinctio, eveniet provident suscipit soluta
              minus iure hic fugit molestias? What Can & What Can't Be Drop
              OffWhat Can & What Can't Be Drop Off
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-emerald-600">
          <div className="bg-sky-300 m-5 rounded-xl h-2/4">
            <div className="text-3xl py-7 mx-5 text-center">
              Waste Drop Off Sites
            </div>
            <hr className="border-4 border-black mb-10 mx-5 rounded" />
            <div className="overflow-y-auto h-72 grid gap-4">
              {/* //THIS ONE! */}
              <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
                Random Card Here
              </div>
              <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7">
                Random Card Here
              </div>
              <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7">
                Random Card Here
              </div>
              <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7">
                Random Card Here
              </div>
              <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7">
                Random Card Here
              </div>
              <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7">
                Random Card Here
              </div>
              <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7">
                Random Card Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTemplate;
