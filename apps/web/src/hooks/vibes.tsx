import { useMutation, useQuery } from "@apollo/client";
import { GET_VIBES } from "../lib/graphql/queries/vibes";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const useGetVibes = () => {
    const { error, data } = useSuspenseQuery(GET_VIBES);
    return { error, data };
}
