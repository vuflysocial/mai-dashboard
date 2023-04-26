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
        " ",
      color: "#fff",
    },
    {
      question: "Melo Inu was birthed on Canto Blockchain originally with a renounced contract and burned liquidity. We chose Canto because it was a new private blockchain that encouraged developer building to help expand the network. After 3 weeks of trading, the community suggested moving over to BSC for more volume, seeing as though Canto was a new chain, we decided to do so for the community. Now, because the contract was renounced and liquidity burned with no-upgradability, we were forced to launch the same contract on BSC and airdrop CANTO holders the new BSC Address. So yes, at this moment, there is a Melo Inu Canto contract as well as a BSC Contract.",
      li: true,
      answer: [
        { list_answer: "..." },
        {
          list_answer:
            "   ME MAI - Create original, realistic images and art from a text description",
        },
      ],
      color: "#fff",
    },
    {
      question: "MAI was the AI token in our ecosystem on CANTO that the community agreed upon sacrificing the liquidity to help us start the Melo Liquid Protocol, the Kami Shinto. All 15 original OG Holders from the launch of MAI were snapshotted and will be Airdropped the Equivalent amount in SHINTO by 4/15. Melo AI Dapp is still live as utility and can be accessed on the dashboard.",
      li: false,
      answer: "",
      color: "#fff",
    },
    {
      question: "As the Melo and Canto Ecosystem grow, eventually, so will Melo Canto. Melo Inu Canto will remain live on Canto as a safe meme to turn to in the early stages of the Canto network. We will find ways to innovate in every place we are.",
      answer:
        "",
      color: "#fff",
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
        height: "180vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "auto", // add overflow property to container
      }}
    >
      <a href="https://www.dextools.io/app/en/canto/pair-explorer/0x0958093f4bbf679e5898a46215d2ecb400ce4c67" target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green text-dark animate-colors"
          // Add "animate-colors" class to enable the change colors animation
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Click Me 0x0958093f4bbf679e5898a46215d2ecb400ce4c67
        </button>
      </a>
      <br />
      <br />
      <br />
      <br />
    {/* ... your code here */}
    <div>
      <br/>
      <br/>
    </div>

    <div
        className="p-2 mt-2"
        style={{
          maxWidth: "70%", // set maximum width for the container
          overflowX: "auto", // add horizontal scroll if content overflows
        }}
      >
        </div>
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
              <h1 className="text-black text-sm md:text-base">
                {/* Update font size here */}
                {list.question}
              </h1>
            </div>
            <div className="mt-3 text-white-600 text-xs md:text-sm">
              {/* Update font size here */}
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
