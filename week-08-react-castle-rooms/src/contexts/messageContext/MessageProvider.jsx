import { useState } from "react";
import { MessageContext } from "./messageContext";

export const MessageProvider = ({children}) => {

  // State Varible
  const [question, setQuestion] = useState("");
  const handleQuestion = (event) => setQuestion(event.target.value);

  const [answer, setAnswer] = useState("");
  const handleAnswer = (event) => setAnswer(event.target.value);

    // For navbar
  const [navHomeActive, setNavHomeActive] = useState(false);
  const [navRoomsActive, setNavRoomsActive] = useState(false);
  const [navCounterActive, setNavCounterActive] = useState(false);
  const [navToggleActive, setNavToggleActive] = useState(false);
  const [navFormActive, setNavFormActive] = useState(false);
  const handleNavInactive = () => {
    setNavHomeActive(false);
    setNavRoomsActive(false);
    setNavCounterActive(false);
    setNavToggleActive(false);
    setNavFormActive(false);
  };
  const handleNavHomeActive    = () => {handleNavInactive(); setNavHomeActive(!navHomeActive);}
  const handleNavRoomsActive   = () => {handleNavInactive(); setNavRoomsActive(!navRoomsActive);}
  const handleNavCounterActive = () => {handleNavInactive(); setNavCounterActive(!navCounterActive);}
  const handleNavToggleActive  = () => {handleNavInactive(); setNavToggleActive(!navToggleActive);}
  const handleNavFormActive    = () => {handleNavInactive(); setNavFormActive(!navFormActive);}

  return(
    <MessageContext.Provider value={{question, answer, handleQuestion, handleAnswer, navHomeActive, navRoomsActive, navCounterActive, navToggleActive, navFormActive, handleNavInactive, handleNavHomeActive, handleNavRoomsActive, handleNavCounterActive, handleNavToggleActive, handleNavFormActive}}>
      {children}
    </MessageContext.Provider>
  );
};