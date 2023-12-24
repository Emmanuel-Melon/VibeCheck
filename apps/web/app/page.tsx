import { SwipeQueue } from "./VibePool/SwipeQueue";
import { SideMenu } from "./components/SideMenu";
import { MatchOVerview } from "./VibePool/MatchOverview";
import { useGetUsers } from "../src/hooks/users";
import { MatchSuccess } from "./Match/MatchSuccess";
import { Matches } from "./Match/Matches";

import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { client } from "../src/lib/graphql/client";

import { ChatList } from "./Chats/ChatList";

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
