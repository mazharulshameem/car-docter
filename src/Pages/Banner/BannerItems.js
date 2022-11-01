import React from "react";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="img-gradient">
        <img src={image} alt="" className="w-full rounded-lg " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/3">
        <h1 className="text-5xl text-white font-bold">
          {" "}
          Affordable <br />
          Pricing for
          <br />
          Car Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2  mt-12 mb-4 left-24  top-2/4">
        <p className=" text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          nobis,
          <br /> ducimus explicabo quae deleniti debitis laborum ipsum fugiat
          vitae reprehenderit.
        </p>
      </div>
      <div className="absolute  flex justify-end transform -translate-y-1/2  left-24  mt-2 top-3/4">
        <button className="btn btn-warning mr-4">Discover More</button>
        <button className="btn btn-outline btn-secondary">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle mr-5 hover:bg-red-500"
        >
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle  hover:bg-red-500">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
