import { SwipeQueue } from "./VibePool/SwipeQueue";
import { UserInfoForm } from "./User/UserInfoForm";
import { UserPreferenceForm } from "./User/UserPreferencesForm";
import { Header } from "./components/Header";
import { ExploreVibes } from "./Vibes/ExploreVibes";
import { OutgoingCall } from "./Calls/OutgoingCall";
import { UserProfile } from "./User/Profile";
import { ListNotifications  } from "./notifications/ListNotifications";

import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { client } from "../src/lib/graphql/client";

import { Chats } from "./Chats/Chats";

export default function Page(): JSX.Element {
  return (
    <ApolloNextAppProvider makeClient={client}>
      <main className="min-h-screen p-2 basis-3/5 space-y-2">
        <Header />
        <section className="flex h-full gap-8">
          <ListNotifications />
        </section>
      </main>
    </ApolloNextAppProvider>
  );
}
