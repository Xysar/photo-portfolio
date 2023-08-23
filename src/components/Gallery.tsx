import React from "react";

const Gallery = ({ series, index }: { series: any[]; index: number }) => {
  return (
    <div className="fixed flex justify-center items-center top-10 w-full h-full bg-green-950 bg-opacity-30 ">
      <button className="  w-16 h-16 absolute top-16 right-8">
        <p className=" text-4xl  font-bold">X</p>
      </button>
      <div className="flex items-center gap-10">
        <button className=" w-16 h-16 bg-slate-100">
          <p className="text-4xl  font-bold">{"<"}</p>
        </button>
        <div className="">
          <img
            src={series[0]}
            alt="test image"
            className="h-[400px] max-w-screen "
          />
          <p className="text-lg text-center font-bold">Caption goes here</p>
        </div>
        <button className="w-16 h-16 bg-slate-100">
          <p className=" text-4xl font-bold "> {">"}</p>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
