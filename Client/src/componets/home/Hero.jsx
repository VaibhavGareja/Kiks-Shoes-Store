import { useNavigate } from "react-router-dom";

const Hero = () => {
  const nevigate = useNavigate()
  const handleShopNow = () =>{
    nevigate("products")
  }
  return (
    <div className="hero  bg-cover bg-no-repeat bg-center flex  ">
      <div className="hero-box my-10  mx-auto px-4 md:flex md:justify-between  items-center max-w-screen-xl ">
        <div className=" hero-text px-28 sm:px-0 text-left md:text-left">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Get your Awesome <br />
            Sneakers
          </h1>
          <p className="text-lg">
            We offer the best deals in our shop. Check them out now. We have
            awesome stuff on sale for you.
          </p>
          <button className="hero-btn mt-3" onClick={handleShopNow}>Shop Now</button>
        </div>
        <div className="hero-image mt-8 md:mt-0">
          <img src="https://res.cloudinary.com/dcefdve9n/image/upload/v1712639036/Kiks-store/hero-image_og892r.png" alt="hero img "  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
