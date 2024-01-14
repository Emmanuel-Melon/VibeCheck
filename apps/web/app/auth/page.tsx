import { FormControl } from "@repo/ui/FormControl";

export default function AuthPage(): JSX.Element {
  return (
    <div>
      <div className="card w-96 bg-white shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Welcome to VibeCheck</h2>
          <form>
            <FormControl label="Username">
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full max-w-xs"
              />
            </FormControl>
            <FormControl label="Password">
              <input
                type="Password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
            </FormControl>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full my-2">Join Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
