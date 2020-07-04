import React from "react";
import Image from "../../images/image2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection() {
  return (
    <div className="relative py-8 px-4 z-0">
      <div className="z-20 relative text-white container mx-auto my-32">
        <div className="grid grid-cols-2">
          <div className="px-12">
            <h1 className="text-6xl">Hi, I am Pratik Dey</h1>
            <p className="leading-normal text-3xl">
              Self taught front-end developer working towards becoming a
              full-stack developer
            </p>
            <p className="text-xl mt-2">
              “Every second you’re closer to oblivion. No quote in the world is
              gonna change that.” <br />
              -PewDiePie
            </p>
          </div>
          <div className="bg-black bg-opacity-25 rounded-lg">
            <p className="text-2xl text-center pt-8">
              Want to work with me? I'm always looking for new projects or a
              coding buddy. Don't be shy, get in touch!
            </p>
            <div className="mx-auto flex justify-center items-center">
              <button
                href="#"
                className="bg-black bg-opacity-25 text-white no-underline hover:bg-black mt-12 p-4 rounded w-4/5 text-xl"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-5xl mt-4 outline-none border-none">
          <button className="outline-none border-none">
            <FontAwesomeIcon icon="chevron-down" />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 h-auto z-10">
        <img src={Image} alt="" className="w-full object-fit-cover h-screen" />
      </div>
    </div>
  );
}
