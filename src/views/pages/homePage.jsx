import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavHome from "../global/elements/navbarHome";
import Feed from "../posts/components/feed";
import { SideBarIz, SideBarDer, SideBarDerChat } from "../sides/components/sideBars";
import ComCard from "../communities/components/comCard";
import Community from "../communities/components/community";
import UserProfile from "../sides/components/profile";
import ChatPage from "./chatPage";
import RutasView from "../sides/components/rutas";
import EventsPage from "../pages/EventsPage";
import FriendProfile from "../sides/components/friendProfile";
import ListFriends from "../pages/listFriendsPage";

const HomePage = () => {
  const location = useLocation();
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);

  //Necesarío para seleccionar una conversación
  const handleSelectConversation = (conversation) => {
    if (conversation && conversation.friend) {
      setSelectedConversation(conversation);
      setSelectedFriend(conversation.friend);
    } else {
      console.warn("La conversación no tiene un amigo asociado.");
    }
  };

  //Para cambiar el siderbar dependiendo de la ruta
  useEffect(() => {
    console.log("Current pathname:", location.pathname);
  }, [location]);

  const isChatRoute = location.pathname === "/home/chat";

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="select-none sticky top-0 z-10">
        <NavHome />
      </div>
      <div className="flex-grow flex select-none h-full">
        <div className="sticky top-0 h-full">
          <SideBarIz />
        </div>
        <div id="home" className="flex-grow flex justify-center items-start mt-6 p-4 overflow-auto md:ml-64 lg:ml-80 md:mr-64 lg:mr-80">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/community" element={<Community/>} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/listsFriend" element={<ListFriends />} />
            <Route path="/friend-profile/:id" element={<FriendProfile />} />
            <Route
              path="/chat"
              element={
                <ChatPage
                  selectedFriend={selectedFriend}
                  selectedConversation={selectedConversation}
                  onSelectConversation={handleSelectConversation}
                />
              }
            />
            <Route path="/rutas" element={<RutasView />} />
            <Route path="/eventos" element={<EventsPage />} />
          </Routes>
        </div>
        <div className="sticky top-0 h-full">
          {isChatRoute ? (
            <SideBarDerChat 
              onSelectFriend={setSelectedFriend} 
              onSelectConversation={handleSelectConversation} 
            />
          ) : (
            <SideBarDer onSelectFriend={setSelectedFriend} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
