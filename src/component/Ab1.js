import React, { useEffect, useState } from "react";
import "animate.css";
import { VscGithub } from "react-icons/vsc";
import { BsGlobe } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import Slider from "./Slider";
import Contact from "./Contact";
import axios from "axios";
import BASE_URL from "../api";

function Ab1({ onClick }) {
  const [pressme, setPressMe] = useState(false);
  const [show, setShow] = useState(false);
  const [project, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  // console.log(window.innerHeight);

  useEffect(() => {
    axios
      .get(`${BASE_URL}all-project`)
      .then((res) => {
        // res.data?.data?.shift();
        setProject(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // ______________________________________________________________________
    axios
      .get(`${BASE_URL}getallskills`)
      .then((res) => {
        // console.log(res.data?.data[0].mySkills);
        // res.data?.data?.shift();
        setSkills(res.data?.data[0].mySkills);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
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
            concentrating on creating user-friendl and human-centered products.
          </p>
        </div>
      </div>

      <div>
        <div className="mb-10">
          <div id="About" className="flex mb-10">
            <h1 className="text-[#cfcfcf] font-bold text-3xl lg:text-4xl">
              <span className="text-4xl ">_</span> About Me
            </h1>
            <div>
              <hr className=" w-[100px] sm:w-[150px] md:w-[350px] lg:w-[400px] mt-10 ml-1" />
            </div>
          </div>
          <div className=" md:flex lg:flex space-x-20">
            <div className="md:max-w-[50%] lg:max-w-[50%] mb-10 md:mb-0 lg:mb-0">
              <p className="text-xl text-[peru] my-3">
                I adore making stuff on the internet,I work as a full-stack
                developer. I'm passionate about software development, problem
                solving, and creating intuitive, dynamic user experiences.
              </p>
              <p className="text-xl text-[peru] my-3">
                And I’ve had the privilege of working at{" "}
                <span className="text-white">inmotion ICT HUB</span>{" "}
                Portharcourt as a front-end intern in 2019, where i gained most
                of my front-end experiences.I later transitioned into full-stack
                development in 2021 and have been working as a full-stack
                developer since then.
              </p>
              <p className="text-xl text-[peru] my-3">
                Here are a few technologies I’ve been working with recently:
              </p>

              <div className="grid grid-cols-2 gap-5 max-w-[450px]">
                {skills?.map((skill, index) => (
                  <div key={index} className="flex space-x-3">
                    <span class="flex h-3 w-3 justify-center items-center mt-4">
                      <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#f5b778] opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-[peru]"></span>
                    </span>
                    <div>
                      <p className="text-[14px] italic text-[peru] my-3">
                        {skill}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {window.innerHeight === 1366 ? null : (
              <div>
                <div
                  onMouseLeave={() => setPressMe(false)}
                  onMouseEnter={() => setPressMe(true)}
                  className="cursor-pointer"
                >
                  <img
                    className="w-[250px] rounded-md z-10 absolute  right-[50px] sm:right-[250px] md:right-[100px] lg:right-[300px]"
                    src="/1654249796121.jpg"
                    alt="me"
                  />
                  <div
                    className={
                      pressme
                        ? "w-[250px] animate__animated animate__slideInRight h-[240px] left-[-20px] md:left-6 relative lg:left-6 top-6 border rounded-md border-[peru]"
                        : "w-[250px] animate__animated animate__slideInRight -left-16 sm:left-20 h-[250px] relative md:left-8 lg:left-10 top-5 border rounded-md border-[peru]"
                    }
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className=" flex mb-10">
          <h1 className="text-[#cfcfcf] font-bold text-3xl lg:text-4xl">
            <span className="text-4xl ">_</span> Some Things I’ve Built
          </h1>
          <div>
            <hr className=" w-[50px] sm:w-[150px] md:w-[350px] lg:w-[400px] mt-2 md:mt-10 lg:mt-10 ml-1" />
          </div>
        </div>
        <div id="Portfolio" className=" md:flex lg:flex my-5 mb-8">
          <div className="relative group max-w-[600px]  cursor-pointer">
            <div className="w-full  ">
              <img
                className="rounded-md w-[550px] h-[300px] md:h-[400px] lg:h-[400px] object-cover"
                src={project[0]?.project_img}
              />
            </div>
            <div className=" group-hover:bg-transparent  bg-[peru] opacity-60 absolute bottom-[0.1px] z-5 h-[300px] md:h-[400px] lg:h-[400px] w-full rounded-md "></div>
          </div>
          <div className=" md:absolute lg:absolute mt-[20px]  md:mr-5  lg:ml-[450px] md:ml-[200px] max-w-[700px]">
            <div className="text-right">
              <p className=" italic text-[peru]">-Featured Project-</p>
              <h1 className="text-[#cfcfcf] mb-3 font-bold text-2xl lg:text-4xl">
                {" "}
                {project[0]?.project_name}
              </h1>
            </div>
            <div className="bg-mybg2 z-10  rounded-md shadow-md p-3 md:max-w-[700px] lg:max-w-[700px] md:w-[500px] lg:w-[auto]">
              <p className="text-xl text-[peru] my-3">
                {project[0]?.project_description}
              </p>
            </div>
            <div className="my-5 flex flex-wrap justify-end ">
              {project[0]?.built_with?.map((ite, ind) => (
                <pre key={ind} className="text-[#b9b9b9] mr-3">
                  {ite}
                </pre>
              ))}
            </div>
            <div className="flex justify-end mr-[65px]">
              <div className="flex space-x-10 text-[#cfcfcf] ">
                <a href="#">
                  <VscGithub className="text-[20px] hover:text-[peru]" />
                </a>
                <a href="#">
                  <BsGlobe className=" text-[20px] hover:text-[peru]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <Slide top when={show}> */}
        {show &&
          project
            ?.filter((item) => {
              return item !== project[0];
            })
            .map((item, index) => (
              <div
                className="animate__slideInDown animate__animated"
                key={index}
              >
                <div className=" md:flex lg:flex my-5 mb-8">
                  <div className="relative group max-w-[600px] cursor-pointer">
                    <div className="w-full  ">
                      <img
                        className="rounded-md w-[550px] h-[300px] md:h-[400px] lg:h-[400px] object-cover"
                        src={item?.project_img}
                      />
                    </div>
                    <div className=" group-hover:bg-transparent  bg-[peru] opacity-60 absolute bottom-[0.1px] z-5 h-[300px] md:h-[400px] lg:h-[400px] w-full rounded-md "></div>
                  </div>
                  <div className=" md:absolute lg:absolute mt-[20px] md:ml-[200px] lg:ml-[450px] max-w-[700px]">
                    <div className="text-right">
                      <p className=" italic text-[peru]">-Featured Project-</p>
                      <h1 className="text-[#cfcfcf] mb-3 font-bold text-2xl lg:text-4xl">
                        {" "}
                        {item?.project_title}
                      </h1>
                    </div>
                    <div className="bg-mybg2 z-10  rounded-md shadow-md p-3 max-w-[700px] h-w-[650px]">
                      <p className="text-xl text-[peru] my-3">
                        {item?.project_description}
                      </p>
                    </div>
                    <div className="my-5 flex flex-wrap justify-end ">
                      {item?.built_with?.map((bt, ind) => (
                        <pre key={ind} className="text-[#b9b9b9] mr-3">
                          {bt}
                        </pre>
                      ))}
                    </div>
                    <div className="flex justify-end mr-[65px]">
                      <div className="flex space-x-10 text-[#cfcfcf] ">
                        <a href={item?.project_github}>
                          <VscGithub className="text-[20px] hover:text-[peru]" />
                        </a>
                        <a href={item?.project_link}>
                          <BsGlobe className=" text-[20px] hover:text-[peru]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        {/* </Slide> */}
        {show ? (
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="flex justify-center items-center"
          >
            {" "}
            <button className="border hover:bg-[peru] hover:border-white border-[peru] rounded-full text-white px-5 py-1 text-center flex justify-center items-center flex-col ">
              <span className="animate-bounce">
                <BsArrowDown />
              </span>
              View less
            </button>
          </div>
        ) : (
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="flex justify-center items-center"
          >
            {" "}
            <button className="border hover:bg-[peru] hover:border-white border-[peru] rounded-full text-white px-5 py-1 text-center flex justify-center items-center flex-col ">
              <span className="animate-bounce">
                <BsArrowDown />
              </span>
              View more
            </button>
          </div>
        )}
      </div>

      <div className="my-10">
        <div className=" flex mb-10">
          <h1
            id="Reviews"
            className="text-[#cfcfcf] font-bold text-3xl lg:text-4xl"
          >
            <span className="text-4xl ">_</span> Reviews of me
          </h1>
          <div>
            <hr className=" w-[50px] sm:w-[150px] md:w-[350px] lg:w-[400px] mt-2 md:mt-10 lg:mt-10 ml-1" />
          </div>
        </div>
        <Slider />
      </div>

      <div id="Contact">
        <Contact onClick={onClick} />
      </div>
    </div>
  );
}

export default Ab1;
