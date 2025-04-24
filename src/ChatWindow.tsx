import React, { useEffect, useRef, useState } from "react";
import { cn } from "./lib/utils";
import { Input } from "./components/input";
import { SendIcon } from "lucide-react";

interface ChatWindowProps {
  isOpen: boolean;
}

interface Message {
  text: string;
  isUser: boolean;
}

const ChatWindow = ({ isOpen }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    // Add user message to chat
    setMessages(prev => [...prev, { text, isUser: true }]);
    setInputValue("");

    const body = {
      chatInput: text,
      sessionId: sessionId || 'abc123'
    };

    try {
      const res = await fetch('https://automation.krishnajha.me/webhook/e4f1ea91-6edf-471d-987d-6ce132b992f8/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      // Add bot response to chat
      setMessages(prev => [...prev, { text: data.output || '...', isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { text: 'Sorry, there was an error processing your message.', isUser: false }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-24 right-6 h-[600px] w-[400px] rounded-2xl transition-all duration-300",
        "border border-gray-200 shadow-xl",
        "bg-gradient-to-br from-[#f5f7fa] to-[#f1f3f5]",
        "flex flex-col overflow-hidden",
        // Add light pattern using bg-stripes utility
        isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/60 backdrop-blur-sm">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "max-w-[80%] rounded-2xl p-3 px-4 shadow-sm",
              message.isUser
                ? "ml-auto bg-[#9b87f5] text-white rounded-tr-none"
                : "mr-auto bg-gray-100 text-gray-800 rounded-tl-none"
            )}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2 p-4 border-t border-gray-200 bg-white/60 backdrop-blur-sm"
      >
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-full border-gray-300"
        />
        <button
          type="submit"
          className="p-2 rounded-full bg-[#9b87f5] text-white hover:bg-[#8b77e5] transition-colors"
          disabled={!inputValue.trim()}
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
