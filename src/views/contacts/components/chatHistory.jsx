import React, { useEffect, useRef } from "react";

const ChatHistory = ({ messages, currentUserId }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages]);

  return (
    <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto break-words max-h-[60vh] border rounded-lg bg-white">
      {messages.map((msg, index) => (
        <MessageBubble key={index} msg={msg} currentUserId={currentUserId} />
      ))}
    </div>
  );
};

const MessageBubble = ({ msg, currentUserId }) => (
  <div className={`flex ${msg.sender === currentUserId ? "justify-end" : "justify-start"} mb-2`}>
    <span
      className={`inline-block p-2 rounded-lg max-w-xs ${
        msg.sender === currentUserId ? "bg-blue-500 text-white text-right" : "bg-gray-300 text-black text-left"
      }`}
    >
      {msg.content}
    </span>
  </div>
);

export default ChatHistory;