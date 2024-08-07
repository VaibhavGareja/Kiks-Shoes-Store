import CountUp from "react-countup";
import Testimonials from "./Testimonials";

const AboutUs = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-28">
      <h3 className="text-cpink text-xl text-center mb-2">WHO WE ARE</h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-10">
        ABOUT US
      </h1>

      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20">
        <div className="w-full lg:w-2/3 lg:pr-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 lg:ml-14 lg:mt-2">
            Welcome to KiksStore
          </h1>
          <p className="text-justify py-3 text-base sm:text-lg leading-relaxed lg:px-16">
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
          <ul className="list-disc pl-6 lg:px-28 text-base sm:text-lg space-y-2 mt-4">
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

        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="grid grid-cols-2 gap-4">
            <img
              className="col-span-2 rounded-2xl w-full h-auto"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713421752/Kiks-store/istockphoto-1497810933-170667a_uhpmet.webp"
              alt="photo1"
            />
            <img
              className="rounded-2xl w-full h-auto"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713421142/Kiks-store/-473Wx593H-469486467-white-MODEL_mqkx06.avif"
              alt="photo2"
            />
            <img
              className="rounded-2xl w-full h-auto"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713421196/Kiks-store/download_p31dyy.jpg"
              alt="photo3"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-4 gap-6 my-14">
        {/* CountUp components */}
        {[
          { end: 80, label: "Happy Customers", suffix: "K+" },
          { end: 100, label: "International Brands", suffix: "+" },
          { end: 5000, label: "Collection Size", suffix: "+" },
          { end: 4.5, label: "Rating", suffix: "+" },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center py-5 bg-pink-200 text-cpink rounded-2xl transition-all duration-500"
          >
            <CountUp
              className="text-4xl sm:text-5xl"
              start={0}
              end={item.end}
              duration={2}
              separator=","
              decimals={item.end === 4.5 ? 1 : 0}
            />
            <span className="text-4xl sm:text-5xl">{item.suffix}</span>
            <h4 className="text-lg sm:text-xl mt-2">{item.label}</h4>
          </div>
        ))}
      </div>

      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-8">
        Company Board Of Directors
      </h1>
      <div className="grid grid-cols-1 max-sm:grid-cols-1 max-sm:mb-5 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Mark Dennise",
            role: "Chief Executive Officer",
            imgSrc:
              "https://res.cloudinary.com/dcefdve9n/image/upload/v1713435615/Kiks-store/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7_vcgzhr.jpg",
          },
          {
            name: "Jane Smith",
            role: "Chief Operating Officer",
            imgSrc:
              "https://res.cloudinary.com/dcefdve9n/image/upload/v1713435615/Kiks-store/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7_vcgzhr.jpg",
          },
          {
            name: "John Doe",
            role: "Chief Financial Officer",
            imgSrc:
              "https://res.cloudinary.com/dcefdve9n/image/upload/v1713435615/Kiks-store/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7_vcgzhr.jpg",
          },
        ].map((person, index) => (
          <div key={index} className="relative max-sm:mb-5">
            <img
              className="rounded-2xl w-full h-auto"
              src={person.imgSrc}
              alt={`person${index + 1}`}
            />
            <div className="bg-pink-300 absolute bottom-[-43px] left-0 right-0 md:py-1 max-sm:mx-8 max-sm:bottom-[-30px] max-sm:py-3 lg:mx-5 rounded-2xl md:mx-4 md:bottom-[-30px] md:rounded-lg lg:py-3 text-center text-black">
              <h1 className="text-lg max-sm:text-2xl md:text-lg font-semibold">
                {person.name}
              </h1>
              <h2 className="text-base md:text-base max-sm:text-xl">
                {person.role}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-sm:mb-72 md:mb-44 lg:mb-32">
        <Testimonials />
      </div>

      <div className="bg-gray-100 rounded-lg shadow-md p-6">
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
          <span className="text-gray-700">
            Address: 123 Main St, Surat, India
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
