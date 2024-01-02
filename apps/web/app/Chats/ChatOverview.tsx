// import { formatDateTime } from "@vibecheck/lib/dates";
import { parseISO, format, formatDistanceToNow } from "date-fns";

export const ChatOverview = ({ chat, updateChatByIndex }) => {
  return (
    <div className="p-2 hover:bg-gray-200" onClick={updateChatByIndex}>
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
