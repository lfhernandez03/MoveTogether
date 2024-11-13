import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from 'emoji-picker-react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex p-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 border rounded-lg p-2"
        />
        <button type="button" onClick={toggleEmojiPicker} className="ml-2 text-2xl">
          😊
        </button>
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
          Enviar
        </button>
      </form>

      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          className="absolute bottom-12 right-2 bg-white border rounded-md z-10"
          style={{ width: '350px', maxHeight: '350px', overflowY: 'auto' }}
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default MessageInput;