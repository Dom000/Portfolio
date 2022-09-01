import React from "react";
import Slides from "./customslide/Slide";
import { BiUserCircle } from "react-icons/bi";

function Slider() {
  return (
    <Slides
      items={[
        <div className="border-[peru] max-w-[700px] mx-10 text-[12px] w-[650px] animate__animated animate__animated animate__fadeIn pb-10  border rounded-md   p-3">
          <BiUserCircle className="text-[50px] text-[peru]" />
          <p className="text-white italic ">Engnr. Prosper Etumnu</p>{" "}
          <div className="max-w-[10px] w-[10px]">
            <p className="text-[peru] w-[20px]">
              loremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDA
            </p>
          </div>
        </div>,
        <div className="border-[peru] max-w-[700px] mx-10 text-[12px] w-[650px] animate__animated animate__slideInRight pb-10  border rounded-md   p-3">
          <BiUserCircle className="text-[50px] text-[peru]" />
          <p className="text-white italic ">Engnr. Prosper Etumnu</p>{" "}
          <div className="max-w-[10px] w-[10px] ">
            <p className="text-[peru] w-[20px]">
              loremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDAloremdjiejfiowjnjckl,xlakjncjsddddddddddddddddddddddddbvduwjcm
              cNDJCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDA
            </p>
          </div>
        </div>,
      ]}
    />
  );
}

export default Slider;
