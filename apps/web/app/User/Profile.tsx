import { Icon } from "@repo/ui/Icon";
import { EditProfileInfo } from "./EditProfileInfo";

export const UserProfile = () => {
  return (
    <div className="card shadow w-full bg-white">
      <div className="card-body">
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg" />
            </div>
          </div>
          <h3 className="text-xl">Emmanuel Gatwech</h3>
        </div>
        <div className="flex justify-between bg-gray-50 rounded-xl p-2">
          <div className="space-y-2 text-center">
            <Icon icon="heroicons:adjustments-horizontal" size="2rem" />
            <h3>Settings</h3>
          </div>
          <div className="space-y-2 text-center">
            <Icon icon="heroicons:pencil" height="25" width="25" />
            <h3>Edit Profile</h3>
          </div>
          <div className="space-y-2 text-center">
            <Icon icon="heroicons:sparkles" height="25" width="25" />
            <h3>VibeChecks</h3>
          </div>
        </div>
        <EditProfileInfo />
      </div>
    </div>
  );
};
