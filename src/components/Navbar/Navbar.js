import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-transparent z-10 bg-black bg-opacity-25">
      <div className="container mx-auto flex justify-between py-4">
        <div>
          <h1 className="text-white text-xl">logo</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="mx-2">
              <button className="text-white text-xl">About Me</button>
            </li>
            <li className="mx-2">
              <button className="text-white text-xl">Connect with me</button>
            </li>
            <li className="mx-2">
              <button className="text-white text-xl">Portfolio</button>
            </li>
            <li className="mx-2">
              <button className="text-white text-xl">Testimonials</button>
            </li>
            <li className="mx-2">
              <button className="text-white text-xl">Contact</button>
            </li>
            <li className="mx-2">
              <button className="text-white text-xl">
                Resume <FontAwesomeIcon icon="download"></FontAwesomeIcon>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
