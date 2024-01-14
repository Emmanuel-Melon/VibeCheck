"use client";
import { VibeCard } from "./VibeCard";
// import { useGetVibes } from "../../src/hooks/vibes";

const vibes = [
  {
    created_at: "2023-12-26T04:43:34.941922+00:00",
    id: "08f15186-84e4-4f5f-b5d1-0257bc0b3555",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1703565702/Designer_15.jpg",
    name: "Travel",
  },
  {
    created_at: "2023-12-26T04:43:52.689786+00:00",
    id: "6b85161c-e284-47fd-bd25-99836ad5006e",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1703565701/Designer_13.jpg",
    name: "Artsy",
  },
  {
    created_at: "2023-12-26T04:44:02.544513+00:00",
    id: "3a04044f-3a85-45f6-a983-a58e30950c5b",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1703565702/Designer_17.jpg",
    name: "Sports",
  },
  {
    created_at: "2023-12-26T04:44:24.941059+00:00",
    id: "eaa025e5-0f2f-4ce9-88c7-6b3db1b726e0",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1703565702/Designer_16.jpg",
    name: "House Parties",
  }
];

export const ExploreVibes = () => {
  //   const { data} = useGetVibes();
  // console.log(data);
  return (
    <div className="space-y-2">
      <h3 className="text-xl">Explore some vibes, find your tribe</h3>
      <div className="flex flex-wrap gap-2">
        {vibes.map((vibe) => (
          <VibeCard key={vibe.id} vibe={vibe} />
        ))}
      </div>
    </div>
  );
};
