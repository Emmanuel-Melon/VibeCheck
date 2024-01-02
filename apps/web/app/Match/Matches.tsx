"use client";
import { Avatar } from "@repo/ui/Avatar";
import { Icon } from "@repo/ui/Icon";
import { useGetUserMatches } from "../../src/hooks/matches";

const Match = ({ match }) => {
  return (
    <div className="grow text-center space-y-2">
      <Avatar src={match.avatar} alt={match.name} size="24" />
      <h2 className="text-xl">{match.name}</h2>
      <button className="btn btn-sm">Say Hi <Icon icon="heroicons:arrow-right" /></button>
    </div>
  );
};
export const Matches = () => {
  const { data: matches, error } = useGetUserMatches();
  console.log(matches);
  return (
    <div className="space-y-8 w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">People you vibe with</h3>
        <div>
          <button className="btn btn-sm btn-outline">View All</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {matches.map((match) => (
          <Match key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};
