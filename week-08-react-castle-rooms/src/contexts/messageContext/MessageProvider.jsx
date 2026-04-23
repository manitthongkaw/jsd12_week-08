import { useState } from "react";
import { MessageContext } from "./messageContext";

export const MessageProvider = ({children}) => {

  // State Varible
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleQuestion = (event) => setQuestion(event.target.value);
  const handleAnswer = (event) => setAnswer(event.target.value);

  return(
    <MessageContext.Provider value={{question, answer, handleQuestion, handleAnswer}}>
      {children}
    </MessageContext.Provider>
  );
};