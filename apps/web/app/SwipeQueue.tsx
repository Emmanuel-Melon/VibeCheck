"use client";
import { SwipeQueueUser } from "./SwipeQueueUser";
import { useSwipeStore } from '../src/hooks/useSwipesStore';
import { useGetUsers } from "../src/hooks/users";

export const SwipeQueue = () => {
    const currentMatch = useSwipeStore((state) => state.currentMatch);


    // const { data} = useGetUsers();
    // console.log(data);
    
    return (
        <div className="h-full">
            <SwipeQueueUser girl={currentMatch} />
        </div>
    )

}