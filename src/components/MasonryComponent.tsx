import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useStore } from "@nanostores/react";
import { chosenImage, isImageOpen } from "./imageLogics";

const MasonryComponenent = ({ series, setOpen }: any) => {
  const $isImageOpen = useStore(isImageOpen);

  return (
    <div className="">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {series?.map((image: any, index: number) => (
            <div
              key={index}
              className=""
              onClick={() => {
                isImageOpen.set(!$isImageOpen);
                chosenImage.set(index);
              }}
            >
              <img className="" src={image} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryComponenent;
