import React, { useEffect, useRef } from "react";

const ChatHistory = ({ messages, currentUserId }) => {
  const chatContainerRef = useRef(null);

  // Mantener el scroll siempre en el último mensaje
  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 p-4 overflow-y-auto break-words max-h-[60vh] border rounded-lg bg-white"
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === currentUserId ? "justify-end" : "justify-start"
          } mb-2`}
        >
          <span
            className={`inline-block p-2 rounded-lg max-w-xs ${
              msg.sender === currentUserId
                ? "bg-blue-500 text-white text-right"
                : "bg-gray-300 text-black text-left"
            }`}
          >
            {msg.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
