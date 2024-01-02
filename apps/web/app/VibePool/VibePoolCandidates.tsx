"use client";
import { useEffect } from "react";
import { VibeCandidate } from "./VibeCandidate";
import { useSwipeStore } from '../../src/hooks/useSwipesStore';
import { useGetUsers } from "../../src/hooks/users";

export const VibePoolCandidates = () => {
    const { data: users, error } = useGetUsers();
    
    const vibeCandidate = useSwipeStore((state) => state.vibeCandidate);
    const vibeCandidates = useSwipeStore((state) => state.vibeCandidates);
    const setVibeCandidates = useSwipeStore((state) => state.setVibeCandidates);
    const setVibeCandidate = useSwipeStore((state) => state.setVibeCandidate);

    setVibeCandidates(users);
    setVibeCandidate(vibeCandidates[1]);
    return (
        <div className="h-full">
            <VibeCandidate vibeCandidate={vibeCandidate} />
        </div>
    )

}