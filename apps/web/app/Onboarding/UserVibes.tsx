import { FormControl, FormControlError } from "@repo/ui/FormControl";
import { Card } from "@repo/ui/Card";
import { Input } from "@repo/ui/Input";
import { Icon } from "@repo/ui/Icon";

export const UserVibes = () => {
  return (
    <Card>
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl">Welcome to VibeCheck</h3>
          <p>Let's get to know you</p>
        </div>
        <form className="space-y-2">
          <FormControl label="Describe yourself">
            <textarea
              placeholder="Jane"
              className="input input-sm w-full max-w-lg bg-gray-100"
            />
          </FormControl>
          <FormControl label="What makes you laugh?">
            <input
              type="text"
              placeholder="Jane"
              className="input input-sm w-full bg-gray-100"
            />
          </FormControl>
          <FormControl label="Got any hobbies?">
            <input
              type="text"
              placeholder="Jane"
              className="input input-sm w-full max-w-lg bg-gray-100"
            />
          </FormControl>
          <FormControl label="Your love language?">
            <input
              type="text"
              placeholder="Jane"
              className="input input-sm w-full max-w-lg bg-gray-100"
            />
          </FormControl>
          <FormControl label="Your green flags?">
            <input
              type="text"
              placeholder="Jane"
              className="input input-sm w-full max-w-lg bg-gray-100"
            />
          </FormControl>
          <FormControl label="Your red flags?">
            <input
              type="text"
              placeholder="Jane"
              className="input input-sm w-full max-w-lg bg-gray-100"
            />
          </FormControl>
          <button className="btn btn-sm btn-primary">Next <Icon icon="heroicons:arrow-right" /></button>
        </form>
      </div>
    </Card>
  );
};
