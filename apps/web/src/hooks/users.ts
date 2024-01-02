"use client";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "../lib/graphql/queries/users";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const useGetUsers = () => {
    const { error, data } = useSuspenseQuery(GET_USERS);
    return { error, data: data?.users };
}
