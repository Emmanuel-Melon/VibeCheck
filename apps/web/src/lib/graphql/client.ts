"use client";
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
const isBrowser = typeof window !== "undefined";

type HttpOptions = {
  headers?: {
    Authorization?: string;
    "x-hasura-admin-secret"?: string;
    "x-hasura-role"?: string;
  };
  token?: string;
};

const wsLink = new GraphQLWsLink(createClient({
  url: `${process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS}/subscriptions`,
}));


const createLink = (opts: HttpOptions = {}) => {
  return createHttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
    credentials: "include",
    headers: {
      ...opts.headers,
      "x-hasura-admin-secret": process.env
        .NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string,
    },
  });
};

const httpLink = createLink({
  headers: {
    "x-hasura-admin-secret": process.env
      .NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string,
  },
});

interface Options {
  token?: string;
}

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

function create(initialState: any, options: Options = {}) {
  const ssrClient = new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : splitLink,
  });
//   const client = new ApolloClient({
//     connectToDevTools: !isBrowser,
//     ssrMode: isBrowser, // Disables forceFetch on the server (so queries are only run once)
//     link: httpLink,
//     cache: new InMemoryCache().restore(initialState || {}),
//     defaultOptions: {
//       watchQuery: {
//         fetchPolicy: "cache-and-network",
//       },
//     },
//   });

//   if (!isBrowser) {
//     client.setLink(httpLink);
//   }

  return ssrClient;
}

export default function initApollo(
  initialState: Record<string, any> = {},
  options?: Options
) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}

export const client = initApollo;
