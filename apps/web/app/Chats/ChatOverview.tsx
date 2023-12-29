// import { formatDateTime } from "@vibecheck/lib/dates";
import { parseISO, format, formatDistanceToNow } from "date-fns";

export const ChatOverview = ({ chat, updateChatByIndex }) => {

    // console.log(formatDateTime);
    const parsedDate = parseISO(chat.lastMessage.createdAt);
    const relativeDate = formatDistanceToNow(parsedDate, { addSuffix: true });
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-200" onClick={updateChatByIndex}>
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={chat.user.avatar}
          />
        </div>
      </div>
      <h3 className="text-sm">{chat.user.name}</h3>
    </div>
  );
};
