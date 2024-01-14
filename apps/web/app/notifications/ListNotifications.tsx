import { NotificationOverview } from "./NotificationOverview";

const notifications = [
  {
    id: 1,
    name: "hello",
    user: {
      name: "Emma Johnson",
      avatar:
        "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400", // URL to the avatar image
    },
    event: {
      type: "vibe match",
      reference: "Vibe Test 1",
    },
  },
  {
    id: 2,
    name: "hello",
    user: {
      name: "Sophia Williams",
      avatar: "https://www.refinery29.com/images/10353760.jpg", // URL to the avatar image
    },
    event: {
      type: "vibe match",
      reference: "Vibe Test 1",
    },
  },
  {
    id: 3,
    name: "hello",
    user: {
      name: "Isabella Jones",
      avatar:
        "https://i.pinimg.com/736x/fb/9f/04/fb9f040640c59b1b78d283218c58edfb.jpg", // URL to the avatar image
    },
    event: {
      type: "vibe match",
      reference: "Vibe Test 1",
    },
  },
];

export const ListNotifications = () => {
  return (
    <div className="card shadow bg-white w-full">
      <div className="card-body">
        <div className="flex">
          <h3 className="card-title">Notifications</h3>
        </div>
        <div className="space-y-2">
          {notifications.map((notification) => (
            <NotificationOverview
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
