"use client";
import { VibeCandidate } from "./VibeCandidate";
import { useSwipeStore } from '../../src/hooks/useSwipesStore';
import { useGetUsers } from "../../src/hooks/users";

export const VibePoolQueue = () => {
    const currentMatch = useSwipeStore((state) => state.currentMatch);
    // const { data} = useGetUsers();
    // console.log(data);
    return (
        <div className="h-full">
            <VibeCandidate girl={currentMatch} />
        </div>
    )

}