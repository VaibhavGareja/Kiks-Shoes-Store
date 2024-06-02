import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      quote:
        "KiksStore is my go-to destination for trendy and comfortable footwear. Their collection is diverse, and the customer service is exceptional!",
      author: "- John Doe",
    },
    {
      quote:
        "I've been a loyal customer of KiksStore for years now, and I've never been disappointed. From sneakers to formal shoes, they have it all!",
      author: "- Jane Smith",
    },
    {
      quote:
        "I love shopping at KiksStore! Their wide range of brands and styles always keeps me coming back for more. Plus, their customer service is top-notch!",
      author: "- Emily Johnson",
    },
    {
      quote:
        "KiksStore is the best place to find unique and fashionable shoes. I always get compliments on the shoes I buy from here. Highly recommend!",
      author: "- Michael Thompson",
    },
    {
      quote:
        "As someone with wide feet, I struggle to find comfortable shoes that also look good. Thankfully, KiksStore has a great selection of wide-fit shoes that fit perfectly!",
      author: "- Sarah Williams",
    },
    {
      quote:
        "I recently bought a pair of running shoes from KiksStore, and they have greatly improved my workouts. The quality is exceptional, and I couldn't be happier!",
      author: "- David Martinez",
    },
    {
      quote:
        "The staff at KiksStore are incredibly helpful and knowledgeable. They helped me find the perfect pair of shoes for my upcoming event, and I couldn't be more grateful!",
      author: "- Jessica Brown",
    },
    // Add more testimonials as needed
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === testimonials.length - 1
        ? 0
        : currentTestimonial + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1
    );
  };

  return (
    <div className="px-8 py-12 mx-auto max-w-3xl">
      <h3 className="text-cpink text-lg text-center mb-4 font-semibold">
        WHAT OUR CUSTOMERS SAY
      </h3>
      <h1 className="text-3xl text-center font-bold mb-8">TESTIMONIALS</h1>
      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentTestimonial ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <p className="text-gray-500 font-medium">{testimonial.author}</p>
            </div>
          </div>
        ))}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-cpink text-white rounded-r-lg shadow-md transition duration-300 hover:bg-cpink-dark hover:shadow-lg"
          onClick={prevTestimonial}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-cpink text-white rounded-l-lg shadow-md transition duration-300 hover:bg-cpink-dark hover:shadow-lg"
          onClick={nextTestimonial}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
