import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {UserPost} from "../../global/elements/userPost";
import { Input } from "../../global/elements/inputs";
import { Button } from "../../global/elements/button";
import { toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";

const MakePost = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isWriting, setIsWriting] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Preset_MoveTogether"); 

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dkzosj1gi/image/upload", formData);
      setImage(response.data.secure_url);
    } catch (error) {
      console.error("Error al subir la imagen", error);
      setError("Error al subir la imagen");
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("No se encontró el token");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://move-together-back.vercel.app/api/crear/publicacion",
        { content, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Publicación creada:", response.data);
      setContent("");
      setImage(null);
      toast.success("Publicación creada correctamente");
    } catch (error) {
      console.error("Error al crear la publicación", error);
      setError("Error al crear la publicación");
    } finally {
      setLoading(false);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setContent(prevContent => prevContent + emojiObject.emoji);
    setIsWriting(true);
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
    <div className="block w-full max-w-lg border border-green-300 bg-slate-100 p-4 rounded-3xl md:max-w-xl md:h-auto">
      <div className="flex w-full pb-4">
        <UserPost />
      </div>
      <div className="w-full">
        <Input
          type="text"
          placeholder={isWriting ? "" : "¿Qué estás pensando?"}
          className="rounded-full w-full h-12 text-center"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setIsWriting(e.target.value.length > 0);
          }}
        />
      </div>
      {image && (
        <div className="w-full pt-3 flex justify-center">
        <img src={image} alt="Imagen subida" className="w-1/2 h-auto rounded-lg shadow-md" />
      </div>
      )}
      <div className="w-full pt-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <Button
            icon="fa-solid fa-image"
            className="hover:bg-blue-200 rounded-full bg-white"
            onClick={() => fileInputRef.current.click()}
          />
          <Button
            icon="fa-solid fa-smile"
            className="hover:bg-blue-200 rounded-full bg-white"
            onClick={toggleEmojiPicker}
          />
        </div>
        <Button
          icon="fa-solid fa-paper-plane"
          className="hover:bg-blue-200 rounded-full bg-white ml-4"
          onClick={handleSubmit}
          disabled={loading}
        />
      </div>
      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          className="absolute bottom-12 right-2 bg-white border rounded-md z-10"
          style={{ width: '350px', maxHeight: '350px', overflowY: 'auto' }}
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default MakePost;