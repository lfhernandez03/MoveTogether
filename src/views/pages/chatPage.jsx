import React, { useState } from "react";
import NavHome from "../global/elements/navbarHome";
import { SideBarIz, SideBarDerChat } from "../sides/components/sideBars";
import ChatMessages from "../contacts/components/chatMessages";

const ChatPage = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSelectConversation = (conversation) => {
    if (conversation && conversation.friend) {
      setSelectedConversation(conversation);
      setSelectedFriend(conversation.friend);
    } else {
      console.warn("La conversación no tiene un amigo asociado.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="select-none sticky top-0 z-10">
        <NavHome />
      </header>

      <main className="flex-grow flex select-none h-full">
        {/* Barra lateral izquierda */}
        <aside className="sticky top-0 h-full">
          <SideBarIz onSelectFriend={setSelectedFriend} />
        </aside>

        {/* Sección principal del chat */}
        <section className="flex-grow flex flex-col justify-between p-4">
          <div className="flex-grow flex flex-col h-full">
            <ChatMessages 
              selectedFriend={selectedFriend} 
              selectedConversation={selectedConversation} 
            />
          </div>
        </section>

        {/* Barra lateral derecha */}
        <aside className="sticky top-0 h-full">
          <SideBarDerChat
            onSelectFriend={setSelectedFriend}
            onSelectConversation={handleSelectConversation}
          />
        </aside>
      </main>
    </div>
  );
};

export default ChatPage;
