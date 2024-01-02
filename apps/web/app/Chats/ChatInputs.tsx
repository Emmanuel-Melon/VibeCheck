import { Icon } from "@repo/ui/Icon";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInsertNewMessage } from "../../src/hooks/chats";

const messageSchema = z.object({
  content: z.string(),
});

export const ChatInputs = () => {
  const { insertNewMessage } = useInsertNewMessage();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("woooooo");
    const validatedInput = messageSchema.parse(data);
    console.log(validatedInput);
    insertNewMessage({
      variables: {
        object: {
          content: validatedInput.content,
          text: validatedInput.content,
          sender_id: "121a6396-e6e0-4057-957d-1f4b5d3cfbd9",
          chat_id: "6068808f-c345-4f18-b6b2-85e1a0ac7474"
        }
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 w-full rounded-full  p-2">
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
          className="input input-sm input-bordered w-full grow bg-base-100"
          {...register("content")}
        />
        <div className="btn btn-sm btn-primary">
          <input type="submit" value="Send" />
        </div>
      </div>
    </form>
  );
};
