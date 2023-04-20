import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const nfts = () => {
  const lists = [
    {
      question: "...",
      li: false,
      answer:
        "",
      color: "#00FFC2",
    },
    {
      question: "Check back soon! maintenance is being done 🚧",
      li: true,
      answer: [
        { list_answer: "..." },
        {
          list_answer:
            "",
        },
      ],
      color: "#FFFF00",
    },
    {
      question: "",
      li: false,
      answer: "",
      color: "#40E0D0",
    },
    {
      question: "",
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

export default nfts;

