import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Information from "../Utilities/information";
import { Configuration, OpenAIApi } from "openai";
import React from "react";

const Completion = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you today?",
      avatar: "openai-dark.png",
    },
  ]);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateCompletion = async () => {
    let chatLogNew = [...chatLog, { user: "me", message: prompt }];
    setChatLog(chatLogNew);
    setPrompt("");
    setLoading(true);
    window.document.body.scrollIntoView({ behavior: "smooth", block: "end" });
    const res = await openai.createCompletion({
      prompt: prompt,
      model: "text-davinci-003",
      temperature: 0.9,
      max_tokens: 2048,
    });
    setLoading(false);
    setChatLog([
      ...chatLogNew,
      { user: "gpt", message: `${res.data.choices[0].text}` },
    ]);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-start">
        <div>
          {chatLog.map((log, i) => (
            <React.Fragment key={i}>
              {log.user === "me" && (
                <div
                  className="flex p-5 rounded-lg mb-5 bg-green-600 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                >
                  <img
                    src="avatar2.png"
                    className="w-8 h-6 mr-2 -ml-1"
                    alt="user"
                  />
                  <div>
                    <span className="text-black mt-5">{log.message}</span>
                  </div>
                </div>
              )}
              {log.user === "gpt" && (
                <div
                  className="flex p-5 bg-green-300 rounded-lg mt-5 mb-5 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                >
                  <img
                    src="openai-dark.png"
                    className="w-6 h-6 mr-3"
                    alt="gpt"
                  />
                  <div>
                    <span className="text-black">{log.message}</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
          {loading && (
            <div className="relative">
              <div
                className="flex p-5 bg-green-400 rounded-lg mt-5 mb-5 border-2 border-black"
                style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                >
                <img
                               src="openai-dark.png"
                               className="w-6 h-6 mr-3"
                               alt="gpt"
                             />
                <div>
                <span className="text-black">Melo Thinking...</span>
                </div>
                </div>
                </div>
                )}
                </div>
                <div className="flex items-center p-5 bg-green border-t border-black">
                <TextareaAutosize
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-grow resize-none p-2 mr-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-green-300"
                placeholder="ask meloGPT..."
                />
                <button
                         onClick={generateCompletion}
                         className="px-4 py-2 text-white bg-green-500 rounded-md focus:outline-none hover:bg-green-600"
                       >
                Send
                </button>
                </div>
                <h1>Sometimes The Api Can be either congested or overloaded and may be slow. however check back shortly and it should be fine.</h1>
                </div>
                </>
                );
                };

                export default Completion;

