import { SwipeQueue } from "./VibePool/SwipeQueue";
import { SideMenu } from "./components/SideMenu";
import { MatchOVerview } from "./VibePool/MatchOverview";
import { useGetUsers } from "../src/hooks/users";
import { MatchSuccess } from "./Match/MatchSuccess";
import { Matches } from "./Match/Matches";
import { UserInfoForm } from "./User/UserInfoForm";
import { UserPreferenceForm } from "./User/UserPreferencesForm";

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
        <section className="flex h-full gap-8">
          <SwipeQueue />
          <UserInfoForm />
          <UserPreferenceForm />
        </section>
      </main>
    </ApolloNextAppProvider>
  );
}
