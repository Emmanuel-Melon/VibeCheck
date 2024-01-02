"use client";
import { ListChats } from "./ListChats";
import { CurrentChat } from "./CurrentChat";

export const Chats = () => {
  return (
    <div className="flex w-full  rounded-xl shadow bg-white">
      <div className="space-y-2 bg-gray-50">
        <ListChats />
      </div>
      <CurrentChat />
    </div>
  );
};
