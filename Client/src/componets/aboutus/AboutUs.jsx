import CountUp from "react-countup";
import Testimonials from "./Testimonials";

const AboutUs = () => {
  return (
    <div className="px-28">
      <h3 className="text-cpink text-xl text-center mb-2">WHO WE ARE</h3>
      <h1 className="text-5xl text-center font-bold mb-10">ABOUT US</h1>
      <div className="flex mt-20 ">
        <div className="w-2/3">
          <h1 className="text-5xl font-medium ml-14 mt-2 ">
            Welcome to KiksStore
          </h1>
          <p className="px-16 text-justify py-3 text-lg leading-loose ">
            {`At KiksStore, we're passionate about footwear that combines style
            and comfort. Founded with a vision to offer the latest trends in
            shoes for men and women, we pride ourselves on curating a diverse
            collection of high-quality footwear that caters to every
            individual's taste and preference. Our team is dedicated to
            providing exceptional customer service and ensuring that each
            customer finds the perfect pair of shoes to elevate their style.
            Explore our selection today and step into fashion-forward footwear
            that speaks to your personality and lifestyle. Welcome to KiksStore,
            where every step is a statement.`}
          </p>
          <ul className="list-disc px-28 text-lg ">
            <li>Passionate about offering stylish and comfortable footwear.</li>
            <li>
              Curating a diverse collection of high-quality shoes for men and
              women.
            </li>
            <li>Dedicated to providing exceptional customer service.</li>
            <li>
              Ensuring every customer finds the perfect pair to elevate their
              style.
            </li>
            <li>
              Fashion-forward footwear for every personality and lifestyle.
            </li>
          </ul>
        </div>

        <div className="w-1/3">
          <div>
            <img
              className=" rounded-2xl"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713421752/Kiks-store/istockphoto-1497810933-170667a_uhpmet.webp"
              alt="photo1"
            />
          </div>
          <div className="flex ">
            <img
              className="w-72 m-2 h-64 rounded-2xl"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713421142/Kiks-store/-473Wx593H-469486467-white-MODEL_mqkx06.avif"
              alt="photo2"
            />
            <img
              className="w-72 m-2 h-56 rounded-2xl"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713421196/Kiks-store/download_p31dyy.jpg"
              alt="photo3"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between my-14">
        <div className="text-center w-80 py-5 bg-pink-200 text-cpink rounded-2xl transition-all duration-500">
          <CountUp
            className="text-5xl"
            start={0}
            end={80}
            duration={2}
            separator=","
          />
          <span className="text-5xl text-center">K+</span>
          <h4 className="text-xl">Happy Customers</h4>
        </div>
        <div className="text-center w-80 py-5 bg-pink-200 text-cpink rounded-2xl transition-all duration-500">
          <CountUp
            className="text-5xl"
            start={0}
            end={100}
            duration={2}
            separator=","
          />
          <span className="text-5xl text-center">+</span>
          <h4 className="text-xl">International Brands</h4>
        </div>
        <div className="text-center w-80 py-5 bg-pink-200 text-cpink rounded-2xl transition-all duration-500 ">
          <CountUp
            className="text-5xl"
            start={0}
            end={5000}
            duration={2}
            separator=","
          />
          <span className="text-5xl text-center">+</span>
          <h4 className="text-xl">Colloection Size</h4>
        </div>
        <div className="text-center w-80 py-5 bg-pink-200 text-cpink rounded-2xl transition-all duration-500">
          <CountUp
            className="text-5xl"
            start={0}
            end={4}
            duration={3}
            separator=","
          />
          <span className="text-5xl text-center">.5+</span>
          <h4 className="text-xl">Rating</h4>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center font-bold">
          Company Board Of Directors
        </h1>
        <div className="py-5 flex">
          <div className="w-1/3 p-3 relative">
            <img
              className="rounded-2xl z-10"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713435615/Kiks-store/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7_vcgzhr.jpg"
              alt="person1"
            />
            <div className="bg-pink-300 absolute top-64 left-4 rounded-lg w-80 ml-16 py-3 text-xl z-30 text-center  text-black ">
              <h1> Mark Dennise</h1>
              <h1>Chief Executive Officer</h1>
            </div>
          </div>
          <div className="w-1/3 p-3 relative">
            <img
              className="rounded-2xl z-10"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713435615/Kiks-store/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7_vcgzhr.jpg"
              alt="person1"
            />
            <div className="bg-pink-300 absolute top-64 left-4 rounded-lg w-80 ml-16 py-3 text-xl z-30 text-center  text-black ">
              <h1> Mark Dennise</h1>
              <h1>Chief Executive Officer</h1>
            </div>
          </div>
          <div className="w-1/3 p-3 relative">
            <img
              className="rounded-2xl z-10"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713435615/Kiks-store/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7_vcgzhr.jpg"
              alt="person1"
            />
            <div className="bg-pink-300 absolute top-64 left-4 rounded-lg w-80 ml-16 py-3 text-xl z-30 text-center  text-black ">
              <h1> Mark Dennise</h1>
              <h1>Chief Executive Officer</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96">
        <Testimonials />
      </div>
      <div className="px-8 py-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 mr-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 00-8 8c0 3.866 5.133 8.326 7.095 9.95a.5.5 0 00.81 0C12.867 18.326 18 13.866 18 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 1.904 2.94 5.022 4.512 6.768a.5.5 0 00.976-.316C9.97 14.227 10 12.53 10 11a1 1 0 00-1-1H7a1 1 0 00-1 1c0 2.071-2.514 4.31-3.432 5.13a.5.5 0 00.976.316C4.06 15.022 7 11.904 7 10a4 4 0 014-4c.61 0 1.201.144 1.732.401a.5.5 0 00.234.059c.208 0 .416-.033.618-.101a6 6 0 000 0c.201.068.41.101.618.101a.5.5 0 00.234-.059c.531-.257 1.122-.401 1.732-.401a4 4 0 014 4c0 1.904 2.94 5.022 4.512 6.768a.5.5 0 00.976-.316C17.97 14.227 18 12.53 18 11a6 6 0 00-6-6zm-2 7a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-700">Email: info@kiksstore.com</span>
      </div>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 mr-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 00-8 8c0 3.866 5.133 8.326 7.095 9.95a.5.5 0 00.81 0C12.867 18.326 18 13.866 18 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 1.904 2.94 5.022 4.512 6.768a.5.5 0 00.976-.316C9.97 14.227 10 12.53 10 11a1 1 0 00-1-1H7a1 1 0 00-1 1c0 2.071-2.514 4.31-3.432 5.13a.5.5 0 00.976.316C4.06 15.022 7 11.904 7 10a4 4 0 014-4c.61 0 1.201.144 1.732.401a.5.5 0 00.234.059c.208 0 .416-.033.618-.101a6 6 0 000 0c.201.068.41.101.618.101a.5.5 0 00.234-.059c.531-.257 1.122-.401 1.732-.401a4 4 0 014 4c0 1.904 2.94 5.022 4.512 6.768a.5.5 0 00.976-.316C17.97 14.227 18 12.53 18 11a6 6 0 00-6-6zm-2 7a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-700">Phone: +91 98765 43210</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 mr-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 00-8 8c0 3.866 5.133 8.326 7.095 9.95a.5.5 0 00.81 0C12.867 18.326 18 13.866 18 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 1.904 2.94 5.022 4.512 6.768a.5.5 0 00.976-.316C9.97 14.227 10 12.53 10 11a1 1 0 00-1-1H7a1 1 0 00-1 1c0 2.071-2.514 4.31-3.432 5.13a.5.5 0 00.976.316C4.06 15.022 7 11.904 7 10a4 4 0 014-4c.61 0 1.201.144 1.732.401a.5.5 0 00.234.059c.208 0 .416-.033.618-.101a6 6 0 000 0c.201.068.41.101.618.101a.5.5 0 00.234-.059c.531-.257 1.122-.401 1.732-.401a4 4 0 014 4c0 1.904 2.94 5.022 4.512 6.768a.5.5 0 00.976-.316C17.97 14.227 18 12.53 18 11a6 6 0 00-6-6zm-2 7a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-700">Address: 123 Main St, Surat, India</span>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
