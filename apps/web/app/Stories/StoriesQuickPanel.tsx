import { Icon } from "@repo/ui/Icon";

const stories = [
  {
    id: 1,
    user: "Eman",
    avatar:
      "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400",
  },
  {
    id: 2,
    user: "Eman",
    avatar:
      "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400",
  },
  {
    id: 3,
    user: "Eman",
    avatar:
      "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400",
  },
];

export const StoriesQuickPanel = () => {
  return (
    <div className="flex gap-4 w-full rounded p-2 items-center">
      <div>
        <button className="btn btn-ghost bg-white btn-circle">
          <Icon icon="heroicons:plus" />
        </button>
      </div>
      <div className="flex gap-2">
        {stories.map((story) => (
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
