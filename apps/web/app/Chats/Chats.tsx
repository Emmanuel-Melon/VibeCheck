"use client";
import { useChatsStore } from "../../src/hooks/useChatsStore";
import { ChatControls } from "./ChatControls";
import { ChatInputs } from "./ChatInputs";
import { ChatBubble } from "./ChatBubble";
import { Icon } from "@repo/ui/Icon";
import { ListChats } from "./ListChats";


const CurrentChatMessages = () => {
  const currentChat = useChatsStore((state) => state.currentChat);
  console.log(currentChat);
  return (
    <div>
      {currentChat?.messages.map((message) => {
        return <ChatBubble key={message.id} message={message} />;
      })}
    </div>
  );
};

const CurrentChat = () => {
  return (
    <div className="grow space-y-2">
      <ChatControls />
      <CurrentChatMessages />
      <ChatInputs />
    </div>
  );
};

export const Chats = () => {
  return (
    <div className="flex w-full  rounded-xl shadow bg-white">
      <div className="space-y-2 basis-2/6 bg-gray-50">
        <div className="flex items-center justify-between p-2 bg-gray-200">
          <h3 className="text-lg">Chats</h3>
          <button className="btn btn-sm btn-square" title="New Message">
            <Icon icon="heroicons:pencil-square" />
          </button>
        </div>
        <ListChats />
      </div>
      <CurrentChat />
    </div>
  );
};
