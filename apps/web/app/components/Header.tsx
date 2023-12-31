import { Icon } from "@repo/ui/Icon";

export const Header = () => {
  return (
    <div className="flex items-center justify-center p-2 gap-4 bg-white rounded-full shadow">
      <div className="flex gap-2">
      <button className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:home" /> Home
        </button>
        <button className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:globe-asia-australia" /> Explore
        </button>
        <button className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:chat-bubble-oval-left-ellipsis" /> Chats
        </button>
        <button className="btn btn-sm btn-primary">
          <Icon icon="heroicons:bell-alert" /> Notifications
        </button>
        <button className="btn btn-sm btn-ghost">
          <Icon icon="heroicons:user" /> Profile
        </button>
      </div>
    </div>
  );
};
