import { Icon } from "@repo/ui/Icon";

export const OutgoingCall = () => {
  return (
    <div className="card w-64 bg-primary shadow w-96 h-96 mx-auto image-full">
      <figure>
        <img
          src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1703567647/Designer_21.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body justify-center flex items-center space-y-4">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg" />
          </div>
        </div>
        <h2 className="card-title text-3xl">Ava Taylor</h2>

        <div className="card-actions justify-center">
          <button title="skip" className="btn btn-sm btn-square">
            <Icon icon="heroicons:microphone" height="25" width="25" />
          </button>
          <button title="skip" className="btn btn-sm btn-square btn-error">
            <Icon icon="heroicons:phone-x-mark" height="25" width="25" />
          </button>
        </div>
      </div>
    </div>
  );
};
