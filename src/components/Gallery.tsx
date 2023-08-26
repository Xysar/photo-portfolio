import React, { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { chosenImage, isImageOpen } from "./imageLogics";

const Gallery = ({ series, index }: { series: any[]; index: number }) => {
  const $isImageOpen = useStore(isImageOpen);
  const $chosenImage = useStore(chosenImage);
  const newRef: any = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      isImageOpen.set(false);
    }
  };
  const increaseIndex = () => {
    if ($chosenImage == series.length - 1) {
      return chosenImage.set(0);
    } else return chosenImage.set($chosenImage + 1);
  };
  const decreaseIndex = () => {
    if ($chosenImage == 0) {
      return chosenImage.set(series.length - 1);
    } else return chosenImage.set($chosenImage - 1);
  };

  return $isImageOpen ? (
    <div className="fixed flex justify-center items-center top-10 w-full h-full bg-slate-950 bg-opacity-50 ">
      {/* <button
        className="w-16 h-16 absolute top-16 right-8"
        onClick={() => isImageOpen.set(false)}
      >
        <p className=" text-4xl  font-bold">X</p>
      </button> */}
      <div className="flex items-center gap-10 max-w-screen" ref={newRef}>
        <button
          className="w-16 h-16 text-slate-100  "
          onClick={() => decreaseIndex()}
        >
          <p className="text-4xl  font-bold">{"<"}</p>
        </button>
        <div className="">
          <img
            src={series[$chosenImage]}
            alt="test image"
            className="h-[400px] "
          />
          <p className="text-lg text-center text-white">Caption goes here</p>
        </div>
        <button
          className="w-16 h-16 text-slate-100 "
          onClick={() => increaseIndex()}
        >
          <p className="text-4xl font-bold"> {">"}</p>
        </button>
      </div>
    </div>
  ) : null;
};

export default Gallery;
