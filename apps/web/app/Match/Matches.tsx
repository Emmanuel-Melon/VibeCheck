"use client";
import { Avatar } from "@repo/ui/Avatar";
import { Icon } from "@repo/ui/Icon";
import { useGetUserMatches } from "../../src/hooks/matches";

const Match = ({ match }) => {
  console.log(match)
  return (
    <div className="grow text-center space-y-2">
      <Avatar src={match.candidate.avatar} alt={match.candidate.name} size="24" />
      <h2 className="text-xl">{match.candidate.name}</h2>
      <button className="btn btn-sm">Say Hi <Icon icon="heroicons:arrow-right" /></button>
    </div>
  );
};
export const Matches = () => {
  const { data: matches, error } = useGetUserMatches("121a6396-e6e0-4057-957d-1f4b5d3cfbd9");
  return (
    <div className="space-y-8 w-full">
      <div className="flex gap-4 items-center">
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
