import React from "react";
import ChatHistory from "./chatHistory";
import MessageInput from "./MessageInput";
import useChat from "../hooks/useChat";

const ChatMessages = ({ selectedFriend, setFriends }) => {
  const { messages, sendMessage, currentUserId } = useChat(selectedFriend, setFriends);

  return (
    <div className="flex flex-col h-full overflow-hidden"> {/* Ajusta la altura total */}
      {selectedFriend ? (
        <>
          <Header selectedFriend={selectedFriend} />
          <div className="flex-1 overflow-y-auto"> {/* Ajusta el área del historial de chat */}
            <ChatHistory messages={messages} currentUserId={currentUserId} />
          </div>
          <MessageInput onSendMessage={sendMessage} />
        </>
      ) : (
        <NoFriendSelected />
      )}
    </div>
  );
};

const Header = ({ selectedFriend }) => (
  <div className="flex items-center p-4 border-b">
    <img src={selectedFriend.avatar} alt={selectedFriend.fullname} className="w-10 h-10 rounded-full mr-2" />
    <h2 className="text-lg font-bold">{selectedFriend.fullname}</h2>
  </div>
);

const NoFriendSelected = () => (
  <div className="flex items-center justify-center h-full">
    <span>Selecciona un amigo para empezar a chatear</span>
  </div>
);

export default ChatMessages;