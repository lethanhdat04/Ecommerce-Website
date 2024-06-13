import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";

const HomeSectionCarousel = ({data, sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className="border">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
