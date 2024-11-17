import React, { useEffect, useRef } from "react";

const ChatHistory = ({ messages, currentUserId }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 p-4 overflow-y-auto break-words max-h-[60vh] border rounded-lg bg-white border-green-300 shadow-lg"
    >
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <MessageBubble key={index} msg={msg} currentUserId={currentUserId} />
        ))
      ) : (
        <p className="text-center text-gray-500">No hay mensajes aún.</p>
      )}
    </div>
  );
};

const MessageBubble = ({ msg, currentUserId }) => {
  const isSender = msg.sender._id === currentUserId;

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`inline-block p-2 rounded-lg ${
          isSender
            ? "bg-blue-500 text-white text-right"
            : "bg-gray-300 text-black text-left"
        }`}
        style={{
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
          maxWidth: "75%",
        }}
      >
        <p className="m-0">{msg.content}</p>
      </div>
    </div>
  );
};

export default ChatHistory;
