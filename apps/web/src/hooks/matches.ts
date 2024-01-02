"use client";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_MATCHES } from "../lib/graphql/queries/matches";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const useGetUserMatches = (userId: string) => {
    const { error, data } = useSuspenseQuery(GET_USER_MATCHES, {
        variables: {
            userId
        }
    });
    return { error, data: data?.matches };
}
