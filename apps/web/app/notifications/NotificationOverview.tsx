export const NotificationOverview = ({ notification }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={notification.user.avatar}
          />
        </div>
      </div>
      <h3>{notification.user.name}</h3>
    </div>
  );
};
