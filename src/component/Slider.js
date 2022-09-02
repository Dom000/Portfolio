import React from "react";
import Slides from "./customslide/Slide";
import { BiUserCircle } from "react-icons/bi";

function Slider() {
  return (
    <Slides
      items={[
        <div className="border-[peru] max-w-[700px] lg:mx-10 text-[12px] lg:w-[650px] animate__animated animate__zoomInDown pb-10  border rounded-md   p-3">
          <BiUserCircle className="text-[50px] text-[peru]" />
          <p className="text-white italic ">Engnr. Prosper Etumnu</p>{" "}
          <div className="flex flex-wrap ">
            <p className="text-[peru] ">
              Having struggled with understanding how the Spotify OAuth flow
              works, I made the course I wish I could have had. Unlike tutorials
              that only cover a few concepts and leave you with half-baked
              GitHub repositories, this course covers everything from explaining
              the principles of REST APIs to implementing Spotify's OAuth flow
              and fetching API data in a React app. By the end of the course,
              you’ll have an app deployed to the internet you can add to your
              portfolio
            </p>
          </div>
        </div>,
        <div className="border-[peru] max-w-[700px] lg:mx-10 text-[12px] lg:w-[650px] animate__animated animate__zoomInLeft pb-10  border rounded-md   p-3">
          <BiUserCircle className="text-[50px] text-[peru]" />
          <p className="text-white italic ">Engnr. Prosper Etumnu</p>{" "}
          <div className="flex flex-wrap ">
            <p className="text-[peru] ">
              Having struggled with understanding how the Spotify OAuth flow
              works, I made the course I wish I could have had. Unlike tutorials
              that only cover a few concepts and leave you with half-baked
              GitHub repositories, this course covers everything from explaining
              the principles of REST APIs to implementing Spotify's OAuth flow
              and fetching API data in a React app. By the end of the course,
              you’ll have an app deployed to the internet you can add to your
              portfolio
            </p>
          </div>
        </div>,
      ]}
    />
  );
}

export default Slider;
