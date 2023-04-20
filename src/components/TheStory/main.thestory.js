import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/styles.css"

const thestory = () => {
  const lists = [
    {
      question: "What if the roles were reversed and Shiba Inu was a cat Meet MELO INU, a clone of Shiba Inu, created with a twist, he  a cat To continue reading the story of Melo Inu",
      li: false,
      answer:
        " Click Me 0x0958093f4bbf679e5898a46215d2ecb400ce4c67",
      color: "#00FFC2",
    },
    {
      question: "Melo Inu was birthed on Canto Blockchain originally with a renounced contract and burned liquidity. We chose Canto because it was a new private blockchain that encouraged developer building to help expand the network. After 3 weeks of trading, the community suggested moving over to BSC for more volume, seeing as though Canto was a new chain, we decided to do so for the community. Now, because the contract was renounced and liquidity burned with no-upgradability, we were forced to launch the same contract on BSC and airdrop CANTO holders the new BSC Address. So yes, at this moment, there is a Melo Inu Canto contract as well as a BSC Contract.",
      li: true,
      answer: [
        { list_answer: "..." },
        {
          list_answer:
            "ME MAI - Create original, realistic images and art from a text description",
        },
      ],
      color: "#FFFF00",
    },
    {
      question: "MAI was the AI token in our ecosystem on CANTO that the community agreed upon sacrificing the liquidity to help us start the Melo Liquid Protocol, the Kami Shinto. All 15 original OG Holders from the launch of MAI were snapshotted and will be Airdropped the Equivalent amount in SHINTO by 4/15. Melo AI Dapp is still live as utility and can be accessed on the dashboard.",
      li: false,
      answer: "",
      color: "#40E0D0",
    },
    {
      question: "As the Melo and Canto Ecosystem grow, eventually, so will Melo Canto. Melo Inu Canto will remain live on Canto as a safe meme to turn to in the early stages of the Canto network. We will find ways to innovate in every place we are.",
      answer:
        "",
      color: "#00FF00",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          'url("")',
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
      <br />
      <br />
      <br />
      <div className="p-2 mt-2">
        {lists.map((list, index) => (
          <div key={index} className="mb-5 mt-5">
            <div
              className="border-2 border-black px-3 py-2 rounded-lg"
              style={{
                boxShadow: "0.4rem 0.4rem 0 #222",
                backgroundColor: list.color,
              }}
            >
              <h1 className="text-black text-base md:text-2xl">
                {list.question}
              </h1>
            </div>
            <div className="mt-3 text-white-600 text-xs md:text-base">
              {!list.li ? (
                <>
                  <span>{list.answer}</span>
                </>
              ) : (
                <>
                  <ul style={{ listStyleType: "circle" }}>
                    {list.answer.map((ans, index) => (
                      <li key={index}>{ans.list_answer}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default thestory;

