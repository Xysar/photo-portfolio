import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryComponenent = ({ series, setOpen }: any) => {
  return (
    <div className="">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="3px">
          {series?.map((image: any, index: number) => (
            <div key={index} className="">
              <img className="" src={image} onClick={() => setOpen()} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryComponenent;
