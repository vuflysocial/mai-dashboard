import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const Charts = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("//data.1freewallpapers.com/detail/gradient-green-texture-background.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        minHeight: "100vh", // Updated height to prevent distortion
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <div>
          <div className="bg-slate-200 rounded-md flex items-center justify-center pl-4 text-slate-900 font-medium group">
            <h1>Charts</h1>
          </div>
        </div>

        <div className="flex-initial max-l:w-full w-/5 pl-3"></div>

        <div className="flex flex-wrap">
          <div className="w-1/2">
            <iframe
              width="90%"
              height="600" // Updated fixed height to prevent distortion
              frameBorder="0"
              scrolling="no"
              src="https://coinbrain.com/embed/bnb-0x5c12c812794b874fe4fdea9a4960df599c89b8e5?theme=light&padding=16&chart=1&trades=1"
            ></iframe>
            <br />
            <div></div>
          </div>
          <div className="w-1/2">
            <iframe
              width="90%"
              height="600" // Updated fixed height to prevent distortion
              frameBorder="0"
              scrolling="no"
              src="https://coinbrain.com/embed/bnb-0xc42a67c3d7d5e387168b72ccc555ee61838c7e33?theme=light&padding=16&chart=1&trades=1"
            ></iframe>
          </div>
        </div>

        <div className="flex-initial max-sm:w-full w-3/5 pl-3"></div>
      </div>
    </div>
  );
};

export default Charts;
