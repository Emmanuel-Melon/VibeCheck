import { SwipeQueue } from "./SwipeQueue";
import { SideMenu } from "./SideMenu";
import { MatchOVerview } from "./MatchOverview";
import { useGetUsers } from "../src/hooks/users";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { client } from "../src/lib/graphql/client";

import { Chats } from "./Chats";

export default function Page(): JSX.Element {

  return (
    <ApolloNextAppProvider makeClient={client}>
    <main className="min-h-screen p-8">
    <section className="flex h-full">

      <SwipeQueue />
    </section>
  </main>
    </ApolloNextAppProvider>

  );
}
