import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const lists = [
    {
      question: "What can this website do?",
      li: false,
      answer:
        "This website allows us to communicate with MAI AI and interact with the user dashboard",
      color: "#fff",
    },
    {
      question: "What can MAI do on this website?",
      li: true,
      answer: [
        { list_answer: "MAI ChatGPT - Interacts with AI in a conversational way." },
        {
          list_answer:
            "ME MAI - Create original, realistic images and art from a text description",
        },
      ],
      color: "#fff",
    },
    {
      question: "",
      li: false,
      answer: "",
      color: "#fff",
    },
    {
      question: "",
      answer:
        "",
      color: "#fff",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          'url("//data.1freewallpapers.com/detail/gradient-green-texture-background.jpg")',
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

export default FAQ;
