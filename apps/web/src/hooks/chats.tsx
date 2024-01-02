"use client";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MESSAGES } from "../lib/graphql/queries/chats";
import { SEND_MESSAGE } from "../lib/graphql/mutations/chats";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const useGetMessages = (chatId: string) => {
    const { error, data } = useSuspenseQuery(GET_MESSAGES, {
        variables: {
            chat_id: chatId
        }
    });
    return { error, data: data?.messages };
}

export const useInsertNewMessage = () => {
    const [insertNewMessage, { error, data }] = useMutation(SEND_MESSAGE);

    return { insertNewMessage, error, data };
}