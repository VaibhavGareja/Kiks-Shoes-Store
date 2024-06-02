// import CategoriesCard from "./CategoriesCard";
import Shoes from "/Categories/Shoes.png";
import Ball from "/Categories/Ball.png";
import Volly from "/Categories/Volly.png";

const Categories = () => {
  return (
    <div className="h-screen mr-20 mb-36 ml-20 p-20">
      <div className="cat-head">
        <h1 id="cat-header" className="text-center  fw-bolder text-5xl my-4">
          Choose categories
        </h1>
        <p id="cat-pera" className="text-center w-3/5 m-auto">
          For explosive events ( sprints up to 400 metres, long jump, triple
          jump) the reduction in atmospheric pressure means there is less
          resistance from the atmosphere.
        </p>
      </div>

      <div className="contaniner">
        <div className="cat-box mt-20 d-flex justify-content-evenly align-items-center">
          <div id="cat-1" className="cat  bg-gray-100  rounded-3xl pt-10 pr-11 w-1/4  ">
            <h4 className="fw-bolder py-2 pl-8 text-3xl text-orange-600">
              Sneakers <br /> Collection
            </h4>
            <p className="pl-8 py-2">120 Products</p>
            <a className="fw-bold py-2 pl-8" style={{ color: "blue" }} href="#">
              See Collections
            </a>
            <img src={Shoes}  alt="shoes" />
            <div className="half-circle"></div>
          </div>
          <div id="cat-2" className="cat bg-gray-100 rounded-3xl pt-10 pr-11 w-1/4">
            <h4 className="fw-bolder pl-8 py-2 text-3xl text-blue-700">
              Football <br /> Collection
            </h4>
            <p className="pl-8 py-2">120 Products</p>
            <a className="fw-bold pl-8 py-2" style={{ color: "blue" }} href="#">
              See Collections
            </a>
            <img src={Ball} alt= "" />
            <div className="half-circle"></div>
          </div>
          <div id="cat-3" className="cat bg-gray-100 rounded-3xl pt-10 pr-11 w-1/4">
            <h4 className="fw-bolderpy-2 pl-8 text-3xl text-pink-500">
              Volleyball <br /> Collection
            </h4>
            <p className="pl-8 py-2">120 Products</p>
            <a className="fw-bold py-2 pl-8" style={{ color: "blue" }} href="#">
              See Collections
            </a>
            <img src={Volly} alt="" />
            <div className="half-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
