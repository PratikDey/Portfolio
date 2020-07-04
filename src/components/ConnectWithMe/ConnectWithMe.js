import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ConnectWithMe() {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <div className="text-white">
          <div className="grid grid-cols-2 px-12">
            <div className="mx-8">
              <h2 className="text-2xl py-4 border-b-2 border-white">
                Connect With Me
              </h2>
              <p className="text-base py-4">
                Want to get in touch? I share my passion for development
                anywhere I can.
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              <FontAwesomeIcon
                className="text-red-700 border-solid border-2 rounded-lg border-red-700 text-6xl h-16 m-2 pt-2 w-12"
                icon="envelope"
              />
              <FontAwesomeIcon
                className="text-red-700 border-solid border-red-700 rounded-lg border-2 text-6xl h-16 m-2 pt-2 w-12"
                icon={["fab", "instagram"]}
              />
              <FontAwesomeIcon
                className="text-red-700 border-solid border-red-700 rounded-lg border-2 text-6xl h-16 m-2 pt-2 w-12"
                icon={["fab", "facebook"]}
              />
              <FontAwesomeIcon
                className="text-red-700 border-solid border-red-700 rounded-lg border-2 text-6xl h-16 m-2 pt-2 w-12"
                icon={["fab", "linkedin"]}
              />
              <FontAwesomeIcon
                className="text-red-700 border-solid border-red-700 rounded-lg border-2 text-6xl h-16 m-2 pt-2 w-12"
                icon={["fab", "github"]}
              />
              <FontAwesomeIcon
                className="text-red-700 border-solid border-red-700 rounded-lg border-2 text-6xl h-16 m-2 pt-2 w-12"
                icon={["fab", "codepen"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
