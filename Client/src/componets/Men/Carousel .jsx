import  { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dcefdve9n/image/upload/v1713256951/Kiks-store/men/new-arrival-template-your-online-store_1361-1293_txiddw.avif",
  "https://res.cloudinary.com/dcefdve9n/image/upload/v1713256683/Kiks-store/men/modern-sale-banner-with-product-description_1361-1259_fefuuf.jpg",
  "https://res.cloudinary.com/dcefdve9n/image/upload/v1713256644/Kiks-store/men/fashion-store-banner-template_1361-1248_hevbth.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative mx-28 h-96">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 px-3 py-1 text-5xl rounded-md"
        onClick={prevSlide}
      >
        {`<`}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 text-5xl  px-3 py-1 rounded-md"
        onClick={nextSlide}

      >
        {`>`}
      </button>
    </div>
  );
};

export default Carousel;
