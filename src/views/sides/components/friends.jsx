import React, { useEffect, useState } from "react";
import UserAvatar from "../../global/elements/userAvatar";
import Spinner from "../../global/elements/spinner";
import sideFriends from "../hooks/sideFriends";
import CommunitySuggest from "./communitySuggest";

const Friends = ({ onFriendClick }) => {
  const { friends, handleSideFriends } = sideFriends();

  return (
    <div className="h-full">
      <div>
        <div className="pb-6">
          <span className="text-lg select-none">Conectados</span>
        </div>
        <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
          {friends.length > 0 ? (
            friends
              .filter((friend) => friend.isLoggedIn)
              .slice(0, 5)
              .map((friend, index) => (
                <div key={index} onClick={() => onFriendClick(friend._id)}>
                  <UserAvatar
                    avatar={friend.avatar}
                    fullname={friend.fullname}
                    isLoggedIn={friend.isLoggedIn}
                  />
                </div>
              ))
          ) : (
            <p className="text-center text-gray-400">Parece que aún no tienes amigos :(</p>
          )}
        </div>
      </div>
      <div className="py-4">
        <span className="block w-full border-t border-gray-300 mt-4"></span>
        <div className="py-4">
          <div className="pb-7">
            <span className="flex text-md font-semibold justify-center text-center items-center select-none">
              Comunidades que te pueden gustar
            </span>
          </div>
          <div>
            <CommunitySuggest
              src="/images/caldera.png"
              communityName="Los Correcaminos"
              communityAt="@RippioFood"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;