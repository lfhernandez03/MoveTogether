import React from 'react';
import ListFriends from '../sides/components/listFriends';

const ListFriendsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mi Lista de Amigos</h1>
      <ListFriends />
    </div>
  );
};

export default ListFriendsPage;