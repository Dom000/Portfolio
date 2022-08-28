import React, { useState } from "react";
import "animate.css";


function Ab1() {
  const [pressme, setPressMe] = useState(false);
  return (
    <div className="p-5 md:pl-10 lg:pl-10 pb-40">
      <div className="mb-20">
        <p className="text-[peru] font-bold text-2xl my-2">Hi, my name is</p>
        <h1 className="text-white font-bold text-4xl lg:text-5xl">
          Godknows Egi. <br />
          <span className="text-[#cfcfcf]">
            I am a Fullstack web developer.
          </span>
        </h1>

        <div className="max-w-[600px]">
          <p className="text-xl text-[peru] my-3">
            I'm a software engineer who specializes in creating (and sometimes
            designing) exceptional digital experiences. At the moment, I'm
            concentrating on creating user-friendly, human-centered products.
          </p>
        </div>
      </div>

      <div>
        <div>
          <div className="flex mb-10">
            <h1 className="text-[#cfcfcf] font-bold text-3xl lg:text-4xl">
              <span className="text-4xl ">_</span> About Me
            </h1>
            <div>
              <hr className=" w-[100px] sm:w-[150px] md:w-[350px] lg:w-[400px] mt-10 ml-1" />
            </div>
          </div>
          <div className=" md:flex lg:flex space-x-20">
            <div className="md:max-w-[50%] lg:max-w-[50%]">
              <p className="text-xl text-[peru] my-3">
                Hello! Godknows is my name, and I adore making stuff on the
                internet,I work as a full-stack developer. I'm passionate about
                software development, problem solving, and creating intuitive,
                dynamic user experiences.
              </p>
              <p className="text-xl text-[peru] my-3">
                And I’ve had the privilege of working at{" "}
                <span className="text-white">inmotion ICT HUB</span>{" "}
                Portharcourt where i gained most of my experiences.
              </p>
              <p className="text-xl text-[peru] my-3">
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div>
              <div
                onMouseLeave={() => setPressMe(false)}
                onMouseEnter={() => setPressMe(true)}
                className="cursor-pointer"
              >
                <img
                  className="w-[250px] rounded-md z-10 absolute right-[50px] sm:right-[250px] md:right-[100px] lg:right-[300px]"
                  src="/1654249796121.jpg"
                  alt="me"
                />
                <div
                  className={
                    pressme
                      ? "w-[250px] animate__animated animate__slideInRight h-[240px] relative left-6 top-6 border rounded-md border-[peru]"
                      : "w-[250px] animate__animated animate__slideInRight -left-16 sm:left-20 h-[250px] relative md:left-8 lg:left-10 top-5 border rounded-md border-[peru]"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ab1;
