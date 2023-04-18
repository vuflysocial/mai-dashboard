import React from "react";

const Home = (props) => {
  return (
    <div
      style={{
        backgroundImage:
          'url("//data.1freewallpapers.com/detail/gradient-green-texture-background.jpg")',
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
      <div className={`flex items-center`}>
        <img
          src="openai-dark.png"
          alt="OpenAI Logo"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <h1 className="font-medium text-4xl md:text-7xl text-white">
        {props.title}
      </h1>
      <p className="text-base md:text-lg text-white pt-3">
        {props.description}
      </p>
      <a
        href="https://meloinuofficial.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="mt-5 w-44 md:w-60 md:h-16 md:text-3xl font-medium rounded-lg px-6 py-3 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white text-dark"
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
          className="mt-5 w-44 md:w-60 md:h-16 md:text-3xl font-medium rounded-lg px-6 py-3 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white text-dark"
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

       { /* <img
          src="three.png"
          alt="volt"
          style={{ width: "100px", height: "100px", margin: "0 10px" }}
    /> */}
      </div>
    </div>
  );
};

export default Home;


