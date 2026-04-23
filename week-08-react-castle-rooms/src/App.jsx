import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {

  // State Varible
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleQuestion = (event) => setQuestion(event.target.value);
  const handleAnswer = (event) => setAnswer(event.target.value);

  return (
    <div className="pt-10 gap-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300 text-center">Message for JSD12:<br/>
        <span className="text-yellow-300">{question ? question : "Waiting for a jsd12 message..."}</span></p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />

      <p className="text-green-300 text-center">Reply from Secret Room:<br/>
        <span className="text-yellow-300">{answer ? answer : "Waiting for a inside message..."}</span></p>

      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}