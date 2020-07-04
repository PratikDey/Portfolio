import React from "react";
import whatImage from "../../images/what-image.png";

export default function WhoAmI() {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <div className="text-white">
          <div className="grid grid-cols-2 px-12">
            <div className="mx-8">
              <h2 className="text-4xl py-8 border-b-2 border-white">
                Who Am I?
              </h2>
              <p className="text-2xl py-4">
                Hello there! My name is Pratik and I'm a Front End Developer
              </p>
              <p>
                Like many other people I enjoy spending my free time increasing
                my knowledge of Web Development and building new and challenging
                projects.
              </p>
              <button className="text-xl my-4 bg-red-700 rounded px-16 py-3 hover:bg-gray-500">
                Find out more
              </button>
            </div>
            <div className="m-12">
              <img
                className="w-full border-4 border-red-700 border-solid rounded"
                src={whatImage}
                alt="who am i"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
