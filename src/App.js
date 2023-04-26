import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatgpt from "./components/ChatGPT/main.chatgpt";
import Dalle from "./components/Dall-E/main.dalle";
import MainLayouts from "./components/Layouts/main.layouts";
import { Sidebar } from "./components/Layouts/sidebar.layouts";
import Octocat from "./components/Utilities/octocat";
import Home from "./components/Home/main.home";
import FAQ from "./components/FAQ/main.faq";

import Trade from "./components/Trade/main.trade";
import NFTS from "./components/NFTS/main.nfts";
import Tv from "./components/tv/main.tv";
import TheStory from "./components/TheStory/main.thestory";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import "./App.css"; // Import the CSS file for the animations

export default function App() {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Octocat />
        <div className="flex">
          <Sidebar />
          <main className="p-7 flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <Home

                    titleFont="canva sans"
                    title="  melo inu"
                    size='height: 36px width: 36px'
                    description2="dashboard."
                    description="melo inu is a fused tabby cat with shiba inu. (you can read of how our tabby became fused with shiba from the paws of our cat scientist shittoshi catama from the whitepaper link below). melo inu was created as a community coin here to help revouloutionize the crypto world.
                     holders that are melo dont want to be the big dog on campus.. we got shib, volt, doge, and floki already.. yeah see, melo holders are real cool `cats`. they all love life, music, kids, fun/games, events, dogs, and they just want a piece of the action. and you can have a piece of the
                     action by holding melo.
                     Through planned development of our NFT club and ai powered ecosytem. we aim to bring crypto to the real world."
                     description3="partners"
                    titleStyle={{ color: "black", fontWeight: "bold" }}
                    descriptionStyle={{ color: "black", fontWeight: "bold" }}

                  />
                }
              />
              <Route
                path="/chatgpt"
                element={
                  <Chatgpt
                    title="ChatGPT"
                    description="Interacts with AI in a conversational way."
                  />
                }
              />
              <Route
                path="/dall-e"
                element={
                  <Dalle
                    title="Dall·E 2"
                    description="Create original, realistic images and art from a text description"
                  />
                }
              />


              <Route path="/thestory" element={<TheStory />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/nfts" element={<NFTS />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/question" element={<FAQ />} />
            </Routes>
          </main>
        </div>

      </BrowserRouter>
    </MainLayouts>
  );
}

