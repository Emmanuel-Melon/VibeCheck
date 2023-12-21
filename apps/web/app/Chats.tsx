"use client";
import { useChatsStore } from "../src/hooks/useChatsStore";
import { Icon } from "@repo/ui/Icon";

const chats = [
  {
    id: 1,
    user: {
      name: "Ava Taylor",
      avatar: "https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg"
    },
  },
  {
    id: 2,
    user: {
      name: "Sophia Williams",
      avatar: "https://www.refinery29.com/images/10353760.jpg"
    },
  },
  {
    id: 3,
    user: {
      name: "Olivia Brown",
      avatar: "https://i0.wp.com/i.pinimg.com/originals/ea/33/54/ea3354fc1adfb967691d628fd8d2c726.jpg?resize=650,400"
    },
  },
];

const ChatOverview = ({ chat, updateChatByIndex }) => {
    console.log(updateChatByIndex);
  return (
    <div className="flex items-center gap-4" onClick={updateChatByIndex}>
      <div className="avatar">
        <div className="w-16 rounded-full">
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

const ChatControls = () => {
  return (
    <div>
      <h3>Controls</h3>
    </div>
  );
};

const ChatInputs = () => {
  return (
    <div className="flex gap-4 w-full bg-gray-50 rounded-full">
      <div className="flex gap-2">
      <button
        title="skip"
        className="btn btn-sm btn-info btn-square btn-error"
      >
        <Icon icon="heroicons:gif" />
      </button>
      </div>
      <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs grow" />
      <button
        title="skip"
        className="btn btn-sm btn-info btn-square btn-error"
      >
        <Icon icon="heroicons:face-smile" />
      </button>
      <button className="btn btn-sm">Send</button>
    </div>
  );
};

const ChatBubble = ({ message }) => {
  const currentChat = useChatsStore((state) => state.currentChat);
  return (
    <div
      className={`chat ${
        message.sender.id === currentChat.user.id ? "chat-start" : "chat-end"
      }`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={message.sender.avatar}
          />
        </div>
      </div>
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div
        className={`chat-bubble ${
          message.sender.id === currentChat.user.id
            ? "bg-primary"
            : "bg-gray-50"
        }`}
      >
        {message.text}
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
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
    <div className="grow space-y-2">
      <ChatControls />
      <CurrentChatMessages />
      <ChatInputs />
    </div>
  );
};

export const Chats = () => {
  return (
    <div className="card card-compact shadow bg-white w-full">
      <div className="card-body">
        <div className="flex">
          <div className="space-y-2 basis-2/6">
            <h3 className="text-lg">Chats</h3>
            <ChatHeads />
          </div>
          <div className="divider divider-horizontal"></div>
          <CurrentChat />
        </div>
      </div>
    </div>
  );
};
