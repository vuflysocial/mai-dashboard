import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";



const dash = () => {
    return (
      <>
        <div>
          <title>Dashboard | Melo Inu</title>
          <meta name="description" content="Melo inu Dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </div>
        <div>

                  </div>
        <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
          <div />
          <div />
          <div className="h-full ml-14 mt-20 mb-10 md:ml-64">
            <div/>
            <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <iframe width="452" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/bnb-0x5c12c812794b874fe4fdea9a4960df599c89b8e5/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                  <br/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default dash;
