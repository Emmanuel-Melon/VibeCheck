"use client";
import { useGetMessages } from "../../src/hooks/chats";
import { ChatControls } from "./ChatControls";
import { ChatInputs } from "./ChatInputs";
import { useChatsStore } from "../../src/hooks/useChatsStore";
import { ChatBubble } from "./ChatBubble";

const ChatMessages = ({ messages }) => {
  const currentChat = useChatsStore((state) => state.currentChat);
  return (
    <div className=" p-2">
      {messages?.map((message) => {
        return <ChatBubble key={message.id} message={message} />;
      })}
    </div>
  );
};

export const CurrentChat = () => {
  const { data, error } = useGetMessages(
    "6068808f-c345-4f18-b6b2-85e1a0ac7474"
  );

  return (
    <div className="grow space-y-2">
      <ChatControls />
      <ChatMessages messages={data} />
      <ChatInputs />
    </div>
  );
};
