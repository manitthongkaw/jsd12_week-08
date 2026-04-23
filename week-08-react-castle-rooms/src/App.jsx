import { useContext } from "react";
import { MessageContext } from "./contexts/messageContext/messageContext";
import Nav from "./components/layout/nav";
import Home from "./pages/Home";
import CastleRooms from "./pages/CastleRooms";
import Counter from "./pages/Counter";
import Toggle from "./pages/Toggle";
import Form from "./pages/Form";

export default function App() {

  const {navRoomsActive, navCounterActive, navToggleActive, navFormActive} = useContext(MessageContext);

  return (
    <div className="flex flex-col justify-start items-center gap-4 min-h-dvh pt-10 bg-slate-800">
      <Nav />
      <div className="w-full text-white text-center">
        {
          navRoomsActive ? <CastleRooms /> :
          navCounterActive ? <Counter /> :
          navToggleActive ? <Toggle /> :
          navFormActive ? <Form /> :
          <Home />
        }
      </div>
    </div>
  );
}