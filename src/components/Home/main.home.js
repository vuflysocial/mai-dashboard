import React from "react";
import styles from "../styles/styles.css"
import 'animate.css';
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";


const tokenGoals = [
  { id: 1, title: '...', description: '...' ,  completed: false },
  { id: 2, title: 'Redeem tokens for a gift', description: 'Description for Goal 2', completed: false },
  { id: 3, title: 'Unlock premium features with tokens', description: 'Description for Goal 3', completed: false },
  { id: 4, title: 'Reach 500 tokens', description: 'Description for Goal 4', completed: false },
  { id: 5, title: 'Donate tokens to charity', description: 'Description for Goal 5', completed: false }
];

// Import your CSS file that contains the styles for Home component

const Home = (props) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "melo inu" ];
  const period = 2000;

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
  return (
    <div>
        <div
      style={{
        backgroundImage: `url('')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        height: "160vh",
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
        <a href="https://twitter.com/meloinu" className="px-4 py-2 hover:bg-green-300">
          Twitter
        </a>
        <a href="https://t.me/meloinuofficial" className="px-4 py-2 hover:bg-yellow-300">
          Telegram
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
        <div>
        <Container>
        <Row className="aligh-items-center">
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
    <div>

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
              border: '1px solid #000',
              borderRadius: '4px',
              padding: '8px',
              flex: '1',
              marginRight: '8px',
              backgroundColor: goal.completed ? '#e0e0e0' : '#fff',
              filter: index === 0 ? 'none' : 'blur(8px)', // Apply blur to all but the first goal container
            }}
          >
            <h2 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>{goal.title}</h2>
            <h4 style={{ margin: '0', fontSize: '8px', fontWeight: 'bold' }}>{goal.description}</h4>
            <p style={{ margin: '8px 0 0 0' }}>...: 0%</p>
            {/* You can add additional components or logic here to update token progress */}
          </div>
        ))}
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

