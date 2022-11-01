import React from "react";
import person from "./../../assets/images/about_us/person.jpg";
import parts from "./../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" relative w-1/2">
            <img
              src={person}
              alt=""
              className=" h-full w-4/5  top-80 rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              alt=""
              className=" absolute right-5 top-1/2 border-8 w-3/5 rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h4 className=" text-orange-600 font-semibold text-2xl mb-1">
              {" "}
              About Us
            </h4>
            <h1 className="text-5xl font-bold my-5 ">
              We are Qualified
              <br />
              & Experience of
              <br />
              this field
            </h1>
            <p className="py-3 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
