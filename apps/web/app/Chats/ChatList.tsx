"use client";
import { useChatsStore } from "../../src/hooks/useChatsStore";
import { ChatControls } from "./ChatControls";
import { ChatInputs } from "./ChatInputs";
import { ChatBubble } from "./ChatBubble";
import { Icon } from "@repo/ui/Icon";

const chats = [
  {
    id: 1,
    user: {
      name: "Ava Taylor",
      avatar:
        "https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg",
    },
  },
  {
    id: 2,
    user: {
      name: "Sophia Williams",
      avatar: "https://www.refinery29.com/images/10353760.jpg",
    },
  },
  {
    id: 3,
    user: {
      name: "Olivia Brown",
      avatar:
        "https://i0.wp.com/i.pinimg.com/originals/ea/33/54/ea3354fc1adfb967691d628fd8d2c726.jpg?resize=650,400",
    },
  },
];

const ChatOverview = ({ chat, updateChatByIndex }) => {
  console.log(updateChatByIndex);
  return (
    <div className="flex items-center gap-4" onClick={updateChatByIndex}>
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={chat.user.avatar}
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg">{chat.user.name}</h3>
        <p>Hey handsome </p>
      </div>
    </div>
  );
};

export const ChatHeads = () => {
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
    <div className="grow space-y-2 p-2">
      <ChatControls />
      <CurrentChatMessages />
      <ChatInputs />
    </div>
  );
};

export const ChatList = () => {
  return (
    <div className="flex w-full  rounded-xl shadow bg-white">
      <div className="space-y-2 basis-2/6 bg-gray-50 p-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg">Chats</h3>
          <button className="btn btn-sm btn-square" title="New Message">
            <Icon icon="heroicons:pencil-square" />
          </button>
        </div>
        <ChatHeads />
      </div>
      <CurrentChat />
    </div>
  );
};
