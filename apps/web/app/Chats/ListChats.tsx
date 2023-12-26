import { useChatsStore } from "../../src/hooks/useChatsStore";
import { ChatOverview } from "./ChatOverview";

const chats = [
    {
      id: 1,
      user: {
        name: "Ava Taylor",
        avatar:
          "https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg",
      },
      lastMessage: {
        text: "Hey, Handsome",
        createdAt: "2023-12-24T04:00:05.78205+00:00"
      }
    },
    {
      id: 2,
      user: {
        name: "Sophia Williams",
        avatar: "https://www.refinery29.com/images/10353760.jpg",
      },
      lastMessage: {
        text: "Nice!",
        createdAt: "2023-12-26T04:11:05.78205+00:00"
      }
    },
    {
      id: 3,
      user: {
        name: "Olivia Brown",
        avatar:
          "https://i0.wp.com/i.pinimg.com/originals/ea/33/54/ea3354fc1adfb967691d628fd8d2c726.jpg?resize=650,400",
      },
      lastMessage: {
        text: "Sounds really fun!",
        createdAt: "2023-12-17T04:00:05.78205+00:00"
      }
    },
  ];

export const ListChats = () => {
    const updateChatByIndex = useChatsStore((state) => state.goToNextChat);
    return (
      <div className="space-y-4 p-2">
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