import { Avatar } from "@repo/ui/Avatar";
import { Icon } from "@repo/ui/Icon";

import { parseISO, format, formatDistanceToNow } from "date-fns";

export const getRelativeDate = (dateISO: any) => {
    const parsedDate = parseISO(dateISO);
    const relativeDate = formatDistanceToNow(parsedDate, { addSuffix: true });
    return relativeDate;
}

export const CallOverview = ({ call }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
        <Avatar src={call.user.avatar} alt={call.user.name} />
        <div>
          <h3 className="text-xl">{call.user.name}</h3>
          <p className="flex gap-2 items-center"><Icon icon="heroicons:phone-x-mark" /> {call.type}</p>
        </div>
      </div>
      <div>
        <p>{getRelativeDate(call.createdAt)}</p>
      </div>
    </div>
  );
};
