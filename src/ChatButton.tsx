import React from 'react';
import { Button } from "./components/button";
import { MessageCircle, X } from "lucide-react";
import { cn } from "./lib/utils";

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatButton = ({ isOpen, onClick }: ChatButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105",
        "bg-[#9b87f5] hover:bg-[#8b77e5]",
        isOpen && "rotate-90"
      )}
    >
      {isOpen ? (
        <X className="h-6 w-6 text-white" />
      ) : (
        <MessageCircle className="h-6 w-6 text-white" />
      )}
    </Button>
  );
};

export default ChatButton;
