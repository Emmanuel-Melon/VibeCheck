import { Icon } from "@repo/ui/Icon";
import { useChatsStore } from "../../src/hooks/useChatsStore";

const user_id = "121a6396-e6e0-4057-957d-1f4b5d3cfbd9";

export const ChatBubble = ({ message }) => {
  console.log(message);
  const currentChat = useChatsStore((state) => state.currentChat);
  return (
    <>
      <div
        className={`chat ${
          message.user.id !== user_id ? "chat-start" : "chat-end"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={message.user.avatar}
            />
          </div>
        </div>

        <div
          className={`chat-bubble ${
            message.user.id !== user_id
              ? "bg-primary"
              : "bg-gray-50 text-gray-900"
          }`}
        >
          {message.content}
        </div>
      </div>
    </>
  );
};

{
  /* <div className="chat-header">
Obi-Wan Kenobi
<time className="text-xs opacity-50">12:45</time>
</div> */
}

// <div className="chat-footer opacity-50">Delivered</div>
