import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

const Banner = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('banner.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, []);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel auto >
        {images.map((imageData) => (
          <img key={imageData.id} src={imageData.image} alt={`Banner ${imageData.id}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
