import { Icon } from "@repo/ui/Icon";

export const ChatInputs = () => {
  return (
    <div className="flex gap-4 w-full bg-gray-50 rounded-full">
      <div className="flex gap-2">
        <button title="skip" className="btn btn-sm btn-square">
          <Icon icon="heroicons:gif" />
        </button>
        <button title="skip" className="btn btn-sm btn-square">
          <Icon icon="heroicons:face-smile" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-sm input-bordered w-full grow"
      />
      <button className="btn btn-sm">Send</button>
    </div>
  );
};
