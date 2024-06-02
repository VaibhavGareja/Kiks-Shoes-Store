import logo from "/logo.png";
const Footer = () => {
  return (
    <div className="container px-20 ">
      <footer id="footer" className="container flex items-baseline justify-between mt-8">
        <div id="box1" className="flex flex-col">
          <div className="footerLogo ">
            <img src={logo} alt="logo" className="h-24 " />
          </div>
          <div className="footer-text pl-7">
            Our Shop is the best choice for buying footwear.
          </div>
          <div className=" icons pl-7 mt-8">
            <i className="fa-brands fa-twitter text-cpink pr-4"></i>
            <i className="fa-brands fa-instagram text-cpink pr-4"></i>
            <i className="fa-brands fa-linkedin text-cpink pr-4"></i>
            <i className="fa-brands fa-facebook text-cpink pr-4"></i>
          </div>
        </div>
        <div id="footer-Links" className="px-20">
          <div id="box2" className="flex  ">
            <ul className="px-5 pb-5">
              <b>
                <li className="fs-5">Home</li>
              </b>
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
            <div id="box3" className="flex pr-9">
              <ul className="px-5 pb-5">
                <b>
                  <li className="fs-5">Our Information</li>
                </b>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
                <li>Site Map</li>
                <li>Store Hours</li>
              </ul>
            </div>
            <div id="box4" className="flex pr-9">
              <ul className="px-5 pb-5">
                <b>
                  <li className="fs-5">My Account</li>
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
      <hr />
      <p>© 2024 Kiks Square Store - Created by Vaibhav Gareja</p>
    </div>
  );
};

export default Footer;
