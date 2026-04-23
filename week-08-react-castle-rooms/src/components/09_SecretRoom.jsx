//import { useState } from "react";
import FetchPoke from "../examples/async/FetchPoke";

export default function SecretRoom({question, answer, handleAnswer}) {

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-10 bg-black w-[90%]">
      <h1>Secret Room</h1>
      <hr className="w-[90%] h-px border-none bg-slate-500" />
      <p className="text-purple-300 text-center">Message from outside:<br/>
        <span className="text-yellow-300">{question ? question : "Waiting for a outside message..."}</span></p>

      {question && !question.includes("ฉันเลือกนาย") &&
        <textarea
          value={answer}
          onChange={handleAnswer}
          className="bg-white text-black rounded px-2 py-1 my-2"
          placeholder="Type your message here..."
        />
      }
      <p className="text-green-300 text-center">Message from inside:<br/>
        <span className="text-yellow-300">{answer ? answer : "Waiting for a inside message..."}</span></p>
    </div>
  );
}
