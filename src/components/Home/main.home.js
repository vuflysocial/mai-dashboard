import React from "react";

const Home = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url('background.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        height: "100vh",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className={`flex items-center`}></div>
      <h1 className="font-md text-2xl md:text-7xl text-white" style={{ fontSize: "64px" }}>
        {props.title}
      </h1>
      <div
        className="text-center" // Added a container with text-center class
        style={{ width: "60%" }} // Added a width of 60% to the container
      >
        <h1 className="font-md text-2xl md:text-7xl text-white" style={{ fontSize: "64px" }}>
          {props.description2}
        </h1>
      </div>
      <p className=" flex items-center text-center text-xs md:text-base text-white pt-3">{props.description}</p>
      <a
        href="https://meloinuofficial.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white text-dark"
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Get Melo Swag
        </button>
      </a>
      <a
        href="https://melo-inu.gitbook.io/whitepaper/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white text-dark"
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Whitepaper
        </button>
      </a>
      <br />

      {/* Row of images */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="volt.png"
          alt="volt"
          style={{ width: "100px", height: "100px", margin: "0 10px" }}
        />
      </div>
    </div>
  );
};

export default Home;

