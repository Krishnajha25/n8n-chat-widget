import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

interface ChatProps {
  url: string;
}

const Chat = ({ url }: ChatProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatWindow isOpen={isOpen} url={url} />
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default Chat;
