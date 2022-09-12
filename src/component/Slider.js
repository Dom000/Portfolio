import React, { useEffect, useState } from "react";
import Slides from "./customslide/Slide";
import { BiUserCircle } from "react-icons/bi";
import axios from "axios";
import BASE_URL from "../api";

function Slider() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}all-reviews`)
      .then((res) => {
        // console.log(res.data?.data);
        setReviews(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // ______________________________________________________________________
  }, []);

  function check_value(value) {
    return value % 2 == 0 ? true : false;
  }

  return (
    <Slides
      items={[
        reviews?.map(
          (data, index) =>
            (
              [<div
                className={
                  check_value(index)
                    ? `border-[peru] max-w-[700px] lg:mx-10 text-[12px] lg:w-[650px] animate__animated animate__zoomInDown pb-10  border rounded-md   p-3`
                    : "border-[peru] max-w-[700px] lg:mx-10 text-[12px] lg:w-[650px] animate__animated animate__zoomInLeft pb-10  border rounded-md   p-3"
                }
              >
                {data?.profile_Image===null?<BiUserCircle className="text-[50px] text-[peru]" />:<img className="w-[50px] h-[50px] rounded-full" src={data?.profile_Image} />}
                <p className="text-white italic ">{data?.reviewer}</p>{" "}
                <div className="flex flex-wrap ">
                  <p className="text-[peru] ">
                   {data?.review}
                  </p>
                </div>
              </div>,]
            ) 
        ),
       
      ]}
    />
  );
}

export default Slider;
