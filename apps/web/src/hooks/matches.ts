"use client";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_MATCHES } from "../lib/graphql/queries/matches";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const useGetUserMatches = () => {
    const { error, data } = useSuspenseQuery(GET_USER_MATCHES);
    return { error, data: data?.matches };
}
