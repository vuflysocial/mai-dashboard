import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const Trade = () => {
  const headingStyle = {
    fontSize: "2rem", // Add your desired font size here
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("//data.1freewallpapers.com/detail/gradient-green-texture-background.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        height: "115vh",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ zIndex: 1 }}>
        <h1 style={headingStyle}>How To Swap on Voltichange And Auto burn every Transaction</h1>
        <br />
        <h2>Connect Wallet with BNB Funds</h2>
        <div>
          <br />
          <h2>Update Slippage in settings to 1% & turn Compatability mode ON</h2>
        </div>
        <br />
        <div>
          <h2>Swap Your Desired Amount and burn 🔥</h2>
        </div>
      </div>
      <br />
      <div className="flex" style={{ zIndex: 1 }}>
        <div className="w-1/2">
          <link rel="stylesheet" href="https://voltichange.net/css/widget.css" />
          <iframe
            src="https://voltichange.net/api/widget/?chain=56&darktheme=false&tokenin=Native&tokenout=0x5c12C812794B874fe4Fdea9A4960df599C89b8E5&slippage=0.5"
            frameBorder="0"
            width="400"
            height="650"
          ></iframe>
        </div>

        <div className="w-1/2">
          <h1 style={headingStyle}>How to Swap MELO On Voltichange</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/meloinu/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Trade;

