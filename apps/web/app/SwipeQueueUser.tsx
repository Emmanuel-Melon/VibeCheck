import { Icon } from "@repo/ui/Icon";
import { useSwipeStore } from "../src/hooks/useSwipesStore";

const Controls = () => {
  const likeMatch = useSwipeStore((state) => state.likeMatch);
  const superLikeMatch = useSwipeStore((state) => state.superLikeMatch);
  const skipMatch = useSwipeStore((state) => state.skipMatch);
  return (
    <>
      <button
        title="skip"
        onClick={skipMatch}
        className="btn btn-md btn-outline btn-square btn-error"
      >
        <Icon icon="ri:close-line" />
      </button>
      <button
        title="like"
        onClick={likeMatch}
        className="btn btn-md btn-outline btn-square btn-success"
      >
        <Icon icon="ri:heart-2-line" />
      </button>
      <button
        title="super-like"
        onClick={superLikeMatch}
        className="btn btn-md btn-outline btn-square btn-info"
      >
        <Icon icon="ri:sparkling-line" />
      </button>
    </>
  );
};

export const SwipeQueueUser = ({ girl }) => {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center px-2">
        {girl.images.map((image, index) => (
          <div
            className={`h-2 w-16 ${
              image.id === 1 ? "bg-secondary" : "bg-gray-300"
            } rounded shadow-sm grow`}
            key={index}
          ></div>
        ))}
      </div>
      <div className="card card-compact w-96 bg-white shadow-lg">
        <figure>
          <img src={girl.avatar} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{girl.name}</h2>
          <div className="flex flex-wrap gap-2">
            {girl.interests.map((interest, index) => (
              <div key={index} className="badge badge-lg badge-outline ">
                {interest}
              </div>
            ))}
          </div>
          <p>{girl.bio}</p>
          <div className="card-actions justify-center">
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
};
