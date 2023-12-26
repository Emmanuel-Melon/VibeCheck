export const VibeCard = ({ vibe }) => {
  return (
    <div className="card w-64 bg-primary shadow grow image-full">
      <figure>
        <img
          src={vibe.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{vibe.name}</h2>
      </div>
    </div>
  );
};
