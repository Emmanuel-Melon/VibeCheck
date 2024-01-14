import { Icon } from "@repo/ui/Icon";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-center p-2 gap-4 bg-white rounded-full shadow">
      <div className="flex gap-2">
      <Link href="/" className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:home" /> Home
        </Link>
        <Link  href="/vibes" className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:globe-asia-australia" /> Explore
        </Link>
        <Link  href="/chats" className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:chat-bubble-oval-left-ellipsis" /> Chats
        </Link>
        <Link  href="/notifications" className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:bell-alert" /> Notifications
        </Link>
        <Link  href="/profile" className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:user" /> Profile
        </Link>
      </div>
    </div>
  );
};
