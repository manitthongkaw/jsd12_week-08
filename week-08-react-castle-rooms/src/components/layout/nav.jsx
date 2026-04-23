import React from 'react';
import { useContext } from "react";
import { MessageContext } from "../../contexts/messageContext/messageContext";

export default function Nav() {

  const {navHomeActive, navRoomsActive, navCounterActive, navToggleActive, navFormActive, handleNavHomeActive, handleNavRoomsActive, handleNavCounterActive, handleNavToggleActive, handleNavFormActive} = useContext(MessageContext);

  return (
    <nav className="flex gap-2 font-medium p-2 border border-slate-300 rounded-2xl bg-slate-50">
      <button onClick={handleNavHomeActive}    className={`px-3 py-1 rounded-lg transition-all ${navHomeActive    ? "text-white bg-sky-700" : "text-slate-700 hover:text-slate-600 bg-slate-200 hover:bg-slate-300"}`}>Home</button>
      <button onClick={handleNavRoomsActive}   className={`px-3 py-1 rounded-lg transition-all ${navRoomsActive   ? "text-white bg-sky-700" : "text-slate-700 hover:text-slate-600 bg-slate-200 hover:bg-slate-300"}`}>Castle Rooms</button>
      <button onClick={handleNavCounterActive} className={`px-3 py-1 rounded-lg transition-all ${navCounterActive ? "text-white bg-sky-700" : "text-slate-700 hover:text-slate-600 bg-slate-200 hover:bg-slate-300"}`}>Counter</button>
      <button onClick={handleNavToggleActive}  className={`px-3 py-1 rounded-lg transition-all ${navToggleActive  ? "text-white bg-sky-700" : "text-slate-700 hover:text-slate-600 bg-slate-200 hover:bg-slate-300"}`}>Toggle</button>
      <button onClick={handleNavFormActive}    className={`px-3 py-1 rounded-lg transition-all ${navFormActive    ? "text-white bg-sky-700" : "text-slate-700 hover:text-slate-600 bg-slate-200 hover:bg-slate-300"}`}>Form</button>
    </nav>
  )
}