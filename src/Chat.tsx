import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ChatWindow isOpen={isOpen} />
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default Chat;
