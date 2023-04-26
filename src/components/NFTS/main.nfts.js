import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SocialCard = ({ title, img, icon, children, width, height }) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        width: width,
        height: height,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <img src={img} alt="user profile image" style={{ borderRadius: "50%", width: "50px", height: "50px", marginRight: "10px" }} />
        <h3 className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium">{title}</h3>
        <FontAwesomeIcon icon={icon} color="green"/>
      </div>
      {children}
    </div>
  );
};

const nfts = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <h3>Melos Favorite Artists</h3>
            </div>
            <div>
              <button href="/dashboard">
                <div>Back To Dashboard</div>
              </button>
            </div>
            <br />
            <div>
              <SocialCard
                title="Chance The Rapper"
                img="openai.png"
                icon={faCheckCircle}
                width="560px"
                height="315px"
              >
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/Av8sn7BXLxE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </SocialCard>
            </div>
            <div>
              <SocialCard
                title="Pammy Hilton"
                img="openai.png"
                icon={faCheckCircle}
                width="560px"
                height="315px"
              >
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/blRu4KKhiOI"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </SocialCard>
            </div>
            <div>
              <SocialCard
                title="Haller"
                img="openai.png"
                icon={faCheckCircle}
                width="560px"
                height="315px"
              >
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/WHhemlO0mW4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </SocialCard>
            </div>
            <br />
            <div>
              <SocialCard
                title="VIBE"
                img="openai.png"
                icon={faCheckCircle}
                width="560px"
                height="315px"
              >
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/BIqeykm6l_Y"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </SocialCard>
            </div>
            <br/>
            <br />
            <div>
              <SocialCard
                title="DOTTY CA$H"
                img="openai.png"
                icon={faCheckCircle}
                width="560px"
                height="315px"
              >
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/X3E_YmUNa90"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </SocialCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nfts;

