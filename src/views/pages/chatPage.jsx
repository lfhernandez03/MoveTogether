import React from "react";
import ChatMessages from "../contacts/components/chatMessages";

const ChatPage = ({ selectedFriend, selectedConversation, onSelectConversation }) => {
  return (
    <div className="block w-full max-w-lg border h-auto border-green-300 bg-white p-4 rounded-3xl md:max-w-xl md:h-auto ">
      <main className="flex-grow flex select-none h-4/6 max-w-3xl w-full">
        {/* Sección principal del chat */}
        <section className="flex-grow flex flex-col justify-between p-4 bg-white shadow-lg rounded-lg">
          <div className="flex-grow flex flex-col h-full">
            <ChatMessages 
              selectedFriend={selectedFriend} 
              selectedConversation={selectedConversation} 
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChatPage;