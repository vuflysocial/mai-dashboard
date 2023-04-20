import React from "react";


const Home = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url('')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        height: "130vh",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
      {/* Add your tab links */}
      <div className="flex justify-center bg-white py-4">
        <a href="#tab1" className="px-4 py-2 hover:bg-green-300">
          ...
        </a>
        <a href="#tab2" className="px-4 py-2 hover:bg-yellow-300">
          ...
        </a>
        <a href="#tab3" className="px-4 py-2 hover:bg-pink-300">
          ...
        </a>
      </div>

      {/* Add your tab content */}
      <div className="container mx-auto mt-8">
        <div id="tab1" className="tab-content">
          {/* Content for Tab 1 */}
        </div>
        <div id="tab2" className="tab-content">
          {/* Content for Tab 2 */}
        </div>
        <div id="tab3" className="tab-content">
          {/* Content for Tab 3 */}
        </div>
      </div>
    </div>

      <div className={`flex items-center`}></div>
      <h1
        className="font-md font-semibold text-3xl md:text-7xl text-black" // updated font weight to "semibold"
        style={{
          fontSize: "94px",
          fontFamily: "Canva Sans", // replace with your desired font name
          fontWeight: "bold", // added font weight property
        }}
      >
        {props.title}
      </h1>
      <div className="text-center" style={{ width: "60%" }}>
        <h1 className="font-md text-2xl md:text-7xl text-black" style={{ fontSize: "64px" }}>
          {props.description2}
        </h1>
      </div>
      <p className="flex items-center text-center text-xs md:text-base text-grey-300 pt-3" style={{ color: "grey" }}>
        {props.description}
      </p>

      <a href="https://meloinuofficial.myshopify.com/" target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green text-dark animate-colors"
          // Add "animate-colors" class to enable the change colors animation
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Get Melo Swag
        </button>
      </a>

      <a href="https://melo-inu.gitbook.io/whitepaper/" target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green text-dark animate-colors"
          // Add "animate-colors" class to enable the change colors animation
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Whitepaper
        </button>
      </a>
      {/* Add the small image at the bottom */}
      <br/>
      <p className="flex items-center text-center text-xs md:text-base text-grey-300 pt-3" style={{ color: "grey" }}>
        {props.description3}
      </p>
      <br />
      <div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="volt.png"
          alt="volt"
          style={{ width: "100px", height: "100px", margin: "0 10px" }}
        />
        <img
          src="buildspace.png"
          alt="buildspace"
          style={{ width: "100px", height: "100px", margin: "0 10px" }}
        />
      </div>
    </div>
    </div>
  );
};

export default Home;











// Define the CSS animation using a style block
<style>

  {`
    @keyframes changeColors {
      0% {
        background-color: #00FF00;
      }
      10% {
          background-color: #00FFC2;
        }
      }
      50% {
        background-color: #FFFF00;
      }
      100% {
        background-color: #40E0D0;
      }
    }

    .animate-colors {
      animation-name: changeColors;
      animation-duration: 2s; /* duration of the animation */
      animation-timing-function: ease-in-out; /* timing function for the animation */
      animation-iteration-count: infinite; /* number of times the animation repeats, set to "infinite" for continuous looping */
    }
  `}
</style>

