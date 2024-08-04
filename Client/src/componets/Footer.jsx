import logo from "/logo.png";

const Footer = () => {
  return (
    <div className="container max-w-7xl px-4 mt-8">
      <footer
        id="footer"
        className="flex flex-col md:flex-row justify-between h-auto md:h-64"
      >
        <div id="box1" className="flex flex-col mb-8 md:mb-0">
          <div className="footerLogo ">
            <img src={logo} alt="logo" className="h-24 " />
          </div>
          <div className="footer-text lg:mt-4 md:pl-2">
            Our Shop is the best choice for buying footwear.
          </div>
          <div className="icons flex mt-4 md:pl-7">
            <i className="fa-brands fa-twitter text-cpink pr-4"></i>
            <i className="fa-brands fa-instagram text-cpink pr-4"></i>
            <i className="fa-brands fa-linkedin text-cpink pr-4"></i>
            <i className="fa-brands fa-facebook text-cpink pr-4"></i>
          </div>
        </div>
        <div id="footer-Links" className="md:px-5">
          <div id="box2" className="flex flex-col md:flex-row">
            <ul className="mb-8 md:mb-0 md:px-5 md:w-44 " >
              <b>
                <li className="text-xl">Home</li>
              </b>
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
            <div
              id="box3"
              className="flex flex-col md:flex-row md:w-44 md:pr-9"
            >
              <ul className="mb-8 md:mb-0  md:w-60">
                <b>
                  <li className="text-xl">Our Information</li>
                </b>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
                <li>Site Map</li>
                <li>Store Hours</li>
              </ul>
            </div>
            <div id="box4" className="flex flex-col md:flex-row md:pr-9">
              <ul className=" md:w-44">
                <b>
                  <li className="text-xl">My Account</li>
                </b>
                <li>Press Inquiries</li>
                <li>Social Media Directories</li>
                <li>Permission</li>
                <li>Requests</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <hr className="mt-2" />
      <p className="text-center mt-2">
        © 2024 Kiks Square Store - Created by Vaibhav Gareja
      </p>
    </div>
  );
};

export default Footer;
