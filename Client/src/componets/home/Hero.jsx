import { useNavigate } from "react-router-dom";

const Hero = () => {
  const nevigate = useNavigate();
  const handleShopNow = () => {
    nevigate("products");
  };
  return (
    <div className="container max-w-7xl bg-cover bg-no-repeat bg-center">
      <div className=" px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 md:h-[400px] md:gap-4 items-center md:flex md:justify-between max-sm:mt-10 lg:my-10 ">
        <div className="lg:col-span-2 max-sm:px-0 text-left md:text-left">
          <h1 className="text-5xl font-bold leading-tight mb-4 max-md:text-center max-sm:text-center max-sm:text-4xl">
            Get your Awesome <br />
            Sneakers
          </h1>
          <p className="text-lg max-md:text-center max-sm:text-center max-sm:text-md">
            We offer the best deals in our shop. Check them out now. We have
            awesome stuff on sale for you.
          </p>
          <div className="flex max-sm:justify-center md:justify-start lg:justify-start">
            <button
              className="  mt-3 bg-[#FF3C78] text-white border px-5 py-2 rounded-md border-solid border-transparent hover:bg-white hover:!text-[#FF3C78] hover:border-![#FF3C78]"
              onClick={handleShopNow}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:h-[500px] col-span-1  transition-transform duration-1000 lg:hover:rotate-[20deg] max-sm:h-[400px] mt-8 md:mt-0">
          <img
            src="https://res.cloudinary.com/dcefdve9n/image/upload/v1712639036/Kiks-store/hero-image_og892r.png"
            alt="hero img "
            className="lg:h-[500px] lg:w-[700px] md:h-[400px] md:w-[700px] max-sm:h-[355px] max-sm:w-[340px] max-sm:ml-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
