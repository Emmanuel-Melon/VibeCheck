export const MatchSuccess = () => {
  return (
    <div>
      <h3 className="text-xl">It's a match!</h3>
      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary">Send Message</button>
        <button className="btn btn-sm">Keep Exploring</button>
      </div>
    </div>
  );
};
