import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext/messageContext";
import Castle from "../components/01_Castle";

export default function CastleRooms() {

  const {question, answer, handleQuestion} = useContext(MessageContext);

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
        <span className="text-yellow-300">{answer ? answer : "Waiting for a outside message..."}</span></p>

      <Castle />
    </div>
  );
}
