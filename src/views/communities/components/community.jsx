import React, { useState } from "react";

import Input from "../../global/elements/inputs";
import Button from "../../global/elements/button";
import ComCard from "./comCard";
import Post from "../../posts/components/post";
import ComPop from "./comPop";
import obCommunity from "./obCommunity";

const Community = () => {
  const [selectedTab, setSelectedTab] = useState("feed");
  const [isOpen, SetIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedSports, setSelectedSports] = useState([]);
  const [IsSportsOpen, setIsSportsOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("authToken"));


  const { communities, loading, error } = obCommunity(token);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImg(URL.createObjectURL(file));
    } else {
      setSelectedImg(null);
    }
  };

  const toggleSportsModal = (event) => {
    event.preventDefault();
    setIsSportsOpen(!IsSportsOpen);
  };

  const handleSports = (sport) => {
    if (selectedSports.length < 4 && !selectedSports.includes(sport)) {
      setSelectedSports([...selectedSports, sport]);
    }
  };

  const handleSportRemove = (sport) => {
    setSelectedSports(selectedSports.filter((s) => s !== sport));
  };

  const sportsOptions = [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Natación",
    "Ciclismo",
  ];

  const togglePopup = () => {
    SetIsOpen(!isOpen);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center border-b-2 pb-6">
      <div className="pb-6">
        <h1 className="font-semibold text-2xl">Explora comunidades</h1>
      </div>
      <div>
        <p className="text-center">
          Encuentra y únete a comunidades que te interesen o crea la tuya.
        </p>
      </div>
      <div className="flex items-center justify-between pt-12">
        <div className="relative w-full max-w-md">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar comunidades"
              className="rounded-full border-none text-center w-full pl-10"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
        <div>
          <Button icon="fa-solid fa-plus" onClick={togglePopup} />
        </div>
      </div>
      {isOpen && <ComPop isOpen={isOpen} SetIsOpen={SetIsOpen} />}
      <div className="flex justify-center items-center mt-6">
        <Button
          text="Feed"
          className={`mr-4 ${
            selectedTab === "feed"
              ? "border-b border-b-green-400 text-black"
              : "bg-white"
          }`}
          onClick={() => handleTabChange("feed")}
        />
        <span className="border-l border-gray-300 h-6 mx-4"></span>
        <Button
          text="Descubrir"
          className={`${
            selectedTab === "descubrir"
              ? "border-b border-b-green-400 text-black"
              : "bg-white"
          }`}
          onClick={() => handleTabChange("descubrir")}
        />
      </div>
      <div className="pt-6">
        {selectedTab === "feed" && (
          <div>
            <h2 className="text-xl font-semibold">Feed</h2>
            <Post />
          </div>
        )}
        {selectedTab === "descubrir" && (
          <div>
          <h2 className="text-xl font-semibold">Descubrir</h2>
          {loading && <p>Cargando...</p>}
          {error && <p>Error al cargar comunidades</p>}
          {communities.map((community) => (
            <ComCard key={community.id} {...community} />
          ))}
        </div>
        )}
      </div>
    </div>
  );
};
export default Community;
