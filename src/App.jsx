import socketIO from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ChatPage from "./Pages/ChatPage";

const socket = socketIO.connect("http://localhost:4000");

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
