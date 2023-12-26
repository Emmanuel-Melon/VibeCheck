import { SwipeQueue } from "./VibePool/SwipeQueue";
import { UserInfoForm } from "./User/UserInfoForm";
import { UserPreferenceForm } from "./User/UserPreferencesForm";
import { Header } from "./components/Header";

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
      <main className="min-h-screen p-2 basis-3/5 space-y-2">
        <Header />
        <section className="flex h-full gap-8">
          <ChatList />
        </section>
      </main>
    </ApolloNextAppProvider>
  );
}
