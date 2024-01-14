"use client";
import { useChatsStore } from "../../src/hooks/useChatsStore";
import { ChatOverview } from "./ChatOverview";

const chats = [
    {
      id: 1,
      user: {
        name: "Emma Johnson",
        id: "1dd69b2b-f82d-487f-820c-559dc3e87f5b",
        avatar:
          "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400",
      },
      lastMessage: {
        text: "Hey, Handsome",
        createdAt: "2023-12-24T04:00:05.78205+00:00"
      }
    }
  ];

export const ListChats = () => {
    const updateChatByIndex = useChatsStore((state) => state.goToNextChat);
    return (
      <div className="space-y-4">
        {chats.map((chat) => (
          <ChatOverview
            key={chat.id}
            chat={chat}
            updateChatByIndex={updateChatByIndex}
          />
        ))}
      </div>
    );
  };