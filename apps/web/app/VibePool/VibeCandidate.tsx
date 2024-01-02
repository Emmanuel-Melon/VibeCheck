import { Icon } from "@repo/ui/Icon";
import { useSwipeStore } from "../../src/hooks/useSwipesStore";

const Controls = ({ vibeCandidate }) => {
  const likeVibeCandidate = useSwipeStore((state) => state.likeVibeCandidate);
  const superlikeVibeCandidate = useSwipeStore((state) => state.superlikeVibeCandidate);
  const skipVibeCandidate = useSwipeStore((state) => state.skipVibeCandidate);
  
  console.log(vibeCandidate);
  return (
    <>
      <button
        title="skip"
        onClick={skipVibeCandidate}
        className="btn btn-md btn-outline btn-square btn-error"
      >
        <Icon icon="ri:close-line" />
      </button>
      <button
        title="like"
        onClick={likeVibeCandidate}
        className="btn btn-md btn-outline btn-square btn-success"
      >
        <Icon icon="ri:heart-2-line" />
      </button>
      <button
        title="super-like"
        onClick={superlikeVibeCandidate}
        className="btn btn-md btn-outline btn-square btn-info"
      >
        <Icon icon="ri:sparkling-line" />
      </button>
    </>
  );
};

export const VibeCandidate = ({ vibeCandidate }) => {
  return (
    <div className="space-y-2">
    {/* <div className="flex gap-2 items-center px-2">
      {vibeCandidate.images.map((image, index) => (
        <div
          className={`h-2 w-16 ${
            image.id === 1 ? "bg-secondary" : "bg-gray-300"
          } rounded shadow-sm grow`}
          key={index}
        ></div>
      ))}
    </div> */}
      <div className="card card-compact w-96 bg-white shadow-lg">
        <figure>
          <img src={vibeCandidate.avatar} alt={vibeCandidate.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{vibeCandidate.name}</h2>
          {/* <div className="flex flex-wrap gap-2">
            {vibeCandidate.interests.map((interest, index) => (
              <div key={index} className="badge badge-lg badge-outline ">
                {interest}
              </div>
            ))}
          </div> */}
          <p>{vibeCandidate.bio}</p>
          <div className="card-actions justify-center">
            <Controls vibeCandidate={vibeCandidate} />
          </div>
        </div>
      </div>
    </div>
  );
};
