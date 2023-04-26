import React from "react";
import styles from "../styles/styles.css"
import 'animate.css';
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";


const tokenGoals = [
  { id: 1, title: 'melo ', description: '0/0' ,  completed: true },
  { id: 2, title: 'shinto ', description: '3/3 ', completed: false },


];



// Import your CSS file that contains the styles for Home component // dog cage https://mjdc.vercel.app/

const Home = (props) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "melo inu" ];
  const period = 2000;
  const [myElementOffsetTop, setMyElementOffsetTop] = useState(null);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  useEffect(() => {
    const myElement = document.getElementById("my-element");
    if (myElement) {
      setMyElementOffsetTop(myElement.offsetTop);
    }
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: myElementOffsetTop + 2000,
      behavior: "smooth",
    });
  };



  return (
    <div>
        <div
      style={{
        backgroundImage: `url('one.png')`,
        backgroundPosition: "top",
        backgroundSize: "",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        height: "500vh",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "auto", // add overflow property to container
      }}
    >
      <div>
      <div className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg text-center">
      <button  onClick={handleButtonClick}>⬇️</button>
      <div id="my-element"></div>
    </div>

      {/* Add your tab links */}
      <div className="flex justify-center bg-white py-4">
        <a href="https://twitter.com/meloinu" className="px-4 py-2 hover:bg-green-300">
          Twitter
        </a>
        <a href="https://t.me/meloinuofficial" className="px-4 py-2 hover:bg-yellow-300">
          Telegram
        </a>
        <a href="https://medium.com/@MELOINU" className="px-4 py-2 hover:bg-pink-300">
          Medium
        </a>
        <a href="#tab4" className="px-4 py-2 hover:bg-pink-300">
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
        <div id="tab4" className="tab-content">
          {/* Content for Tab  */}
        </div>
      </div>
    </div>

    <a href="https://meloai.netlify.app/" target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green text-dark animate-colors"
          // Add "animate-colors" class to enable the change colors animation
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Melo AI (MAI) Ask Melo
        </button>
      </a>

      <div className={`flex items-center`}></div>
      <h1
        className="font-md font-semibold text-3xl md:text-7xl text-black" // updated font weight to "semibold"
        style={{
          fontSize: "84px",
          textAlign: "center",
          fontFamily: "Canva Sans", // replace with your desired font name
          fontWeight: "bold", // added font weight property
        }}
      >
        <div>
        <Container>
        <Row className="aligh-items-center ">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <h1>{``} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "melo inu" ]'><span className="wrap">{text}</span></span></h1>


              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        </Container>
        </div>

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
<br/>
<a href="/trade" target="_blank" rel="noopener noreferrer">
<button>Buy $MELO <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg></button>
</a>

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
    <br />
    <h1 className="mt-5 w-36 md:w-52 md:h-15 md:text-3xl">Melo JackedUp Dog Cage Club NFTs</h1>

    <div>

    <Container className="border-container rounded-lg px-5 py-2.5 border-2 border-black shadow-lg ">

    <a href="" target="_blank" rel="noopener noreferrer">
      <button
      type="button"
      className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green text-dark animate-colors"
      style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}>

        The Dog Cage site (currently under construction 🚧)</button></a>
  <div className="slider-container">
    <div className="slider-item">
      <img src="shintodog.gif" alt="Image 1" />
    </div>
    <div className="slider-item">
      <img src="volt.gif" alt="Image 2" />
    </div>
    <div className="slider-item">
      <img src="dogmelo.gif" alt="Image 3" />
    </div>
  </div>
</Container>
<br/>
<Container className="border-container rounded-lg px-5 py-2.5 border-2 border-black shadow-lg ">
<div class="roadmap" style={{ display: "inline-block" }}>
<section class="roadmap">
  <div class="container">
    <h2 class="border-container  rounded-lg px-5 py-2.5 border-2 border-black shadow-lg roadmap__title md:text-2xl font-medium">Phase 1</h2>
    <div class="roadmap__item">
      <div class="roadmap__icon">

      </div>
      <div class="roadmap__details">
        <h3 class="roadmap__stage-title md:text-xl font-medium ">Telegram ✔️</h3>
        <p class="roadmap__stage-description">Launch of telegram chat</p>
      </div>
    </div>
    <div class="roadmap__item">
      <div class="roadmap__icon">

      </div>
      <div class="roadmap__details">
        <h3 class="roadmap__stage-title md:text-xl font-medium">Twitter ✔️</h3>
        <p class="roadmap__stage-description">Launch of Twitter profile</p>
      </div>
    </div>
    <div class="roadmap__item">
      <div class="roadmap__icon">

      </div>
      <div class="roadmap__details">
        <h3 class="roadmap__stage-title md:text-xl font-medium">Fairlaunch ✔️</h3>
        <p class="roadmap__stage-description">melo inu was launched with no presale or private sale</p>
      </div>
    </div>
    </div>
<div>
  <div>
    <div class="roadmap__details">
        <h2 class="roadmap__stage-title md:text-xl font-medium">Website Release ✔️</h2>
        <p class="roadmap__stage-description">website development and updates/upgrades</p>
      </div>
    </div>
    </div>

    <div>
  <div>
    <div class="roadmap__details">
        <h2 class="roadmap__stage-title md:text-xl font-medium">Contract Verification ✔️</h2>
        <p class="roadmap__stage-description">website development and updates/upgrades</p>
      </div>
    </div>
    </div>

    <div>
  <div>
    <div class="roadmap__details">
        <h2 class="roadmap__stage-title md:text-xl font-medium">MAI ask melo Chat assistant ✔️</h2>
        <p class="roadmap__stage-description">AI chat application powered by OpenAI API</p>
      </div>
    </div>
    </div>

    <div>
  <div>
    <div class="roadmap__details">
        <h2 class="roadmap__stage-title md:text-xl font-medium">Shopify Merchandise ✔️</h2>
        <p class="roadmap__stage-description">shopify store connected to the mecosytem</p>
      </div>
    </div>
    </div>

    <div>
  <div>
    <div class="roadmap__details">
        <h2 class="roadmap__stage-title md:text-xl font-medium">500 Holders 🚧</h2>
        <p class="roadmap__stage-description">organically reach 500 holders through outside building and community</p>
      </div>
    </div>
    </div>
    </section>
   </div>
   </Container>










    <br/>
    <br/>
    <Container className="border-container rounded-lg px-5 py-2.5 border-2 border-black shadow-lg ">
    <div>
      <h1
      className="border-container rounded-lg px-5 py-2.5 border-2 border-black shadow-lg  text-2xl md:text-7xl text-black"> Trending Artist</h1>
    </div>

    <div className="circle-images-container">
      <div className="circle-image">
        <img src="haller.jpg" alt="Circle 1" className="circle-img" />
        <a href="/nfts">
        <button>Haller.</button>
        </a>
      </div>
      <div className="circle-image">
        <img src="vibe.jpg" alt="Circle 2" className="circle-img" />
        <a href="/nfts">
        <button>Vibe</button>
        </a>
      </div>
      <div className="circle-image ">
        <img src="circle-3.jpg" alt="Dotty Ca$h" className="circle-img" />
        <a href="/nfts">
        <button>Dotty Ca$h</button>
        </a>
      </div>
      <div className="circle-image ">
        <img src="circle-3.jpg" alt="Pammy Hilton" className="circle-img" />
        <a href="/nfts">
        <button>Pammy Hilton</button>
        </a>
      </div>
<div className="circle-image ">
        <img src="chance.jpg" alt="Chance The Rapper" className="circle-img" />
        <a href="/nfts">
        <button>Chance The Rapper</button>
        </a>
      </div>
      <div className="circle-image">
        <img src="loading..." alt="..." className="circle-img" />
        <a href="/apply" target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green text-dark animate-colors"
          // Add "animate-colors" class to enable the change colors animation
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Wanna be a trending melo artist?
        </button>
      </a>
      </div>
    </div>
    </Container>


    </div>
    <br />
    <br />
    <br />
    <div>
    <div style={{ border: '1px solid #000', borderRadius: '8px', padding: '16px' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {tokenGoals.map((goal, index) => (
          <div
            key={goal.id}
            style={{
              border: '1px solid #022359',
              borderRadius: '4px',
              padding: '8px',
              flex: '1',
              marginRight: '8px',
              backgroundColor: goal.completed ? '#e0e0e0' : '#fff',
              // Apply blur to all but the first goal container
            }}
          >
            <h2 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>{goal.title}Tokenomics</h2>
            <h4 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>{goal.description}</h4>
            <p style={{ margin: '8px 0 0 0' }}>Tax %</p>
            {/* You can add additional components or logic here to update token progress */}
          </div>
        ))}
      </div>
      <div>
      <div className="slider-item">
      <img src="mento.gif" alt="Image 3" />
    </div>
</div>
                                </div>
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

