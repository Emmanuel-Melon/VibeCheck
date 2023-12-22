import { Icon } from "@repo/ui/Icon";
import { useChatsStore } from "../../src/hooks/useChatsStore";

export const ChatBubble = ({ message }) => {
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

      <div
        className={`chat-bubble ${
          message.sender.id === currentChat.user.id
            ? "bg-primary"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        {message.text}
      </div>
      
    </div>
  );
};

{/* <div className="chat-header">
Obi-Wan Kenobi
<time className="text-xs opacity-50">12:45</time>
</div> */}

// <div className="chat-footer opacity-50">Delivered</div>