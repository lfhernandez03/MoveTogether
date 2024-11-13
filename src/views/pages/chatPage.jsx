// src/pages/ChatPage.jsx
import React, { useState } from "react";
import NavHome from "../global/elements/navbarHome";
import { SideBarIz, SideBarDerChat } from "../sides/components/sideBars";
import ChatMessages from "../contacts/components/chatMessages";
import MessageInput from "../contacts/components/MessageInput";
import sideFriends from "../sides/hooks/sideFriends"; // Asegúrate de que este hook esté definido correctamente

const ChatPage = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const { friends } = sideFriends(); // Asegúrate de que esto esté devolviendo la lista de amigos correctamente

  const onlineFriends = friends.filter((friend) => friend.isLoggedIn);
  const offlineFriends = friends.filter((friend) => !friend.isLoggedIn);

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="select-none sticky top-0 z-10">
        <NavHome />
      </header>

      <main className="flex-grow flex select-none h-full">
        <aside className="sticky top-0 h-full">
          <SideBarIz />
        </aside>

        <section className="flex-grow flex flex-col justify-between p-4">
  <div className="flex-grow flex flex-col h-full"> {/* Contenedor para ocupar el espacio completo */}
    <ChatMessages selectedFriend={selectedFriend} />
  </div>
</section>

        <aside className="sticky top-0 h-full">
          <SideBarDerChat
            conversations={[]} // Pasa las conversaciones si las tienes
            onlineFriends={onlineFriends}
            offlineFriends={offlineFriends}
            onSelectFriend={setSelectedFriend}
          />
        </aside>
      </main>
    </div>
  );
};

export default ChatPage;
