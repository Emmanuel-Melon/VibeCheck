import { VibePoolCandidates } from "./VibePool/VibePoolCandidates";
import { UserInfoForm } from "./User/UserInfoForm";
import { UserPreferenceForm } from "./User/UserPreferencesForm";
import { Header } from "./components/Header";
import { ExploreVibes } from "./vibes/ExploreVibes";
import { OutgoingCall } from "./Calls/OutgoingCall";
import { IncomingCall } from "./Calls/IncomingCall";
import { UserProfile } from "./User/Profile";
import { ListNotifications } from "./notifications/ListNotifications";
import { UserInfo } from "./Onboarding/UserInfo";
import { UserVibes } from "./Onboarding/UserVibes";
import { UserPreferences } from "./Onboarding/UserPreferences";
import { StoriesQuickPanel } from "./Stories/StoriesQuickPanel";
import { CallHistory } from "./Calls/CallHistory";
import { Chats } from "./Chats/Chats";
import { Matches } from "./Match/Matches";

import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { client } from "../src/lib/graphql/client";

export default function Page(): JSX.Element {
  return (
    <ApolloNextAppProvider makeClient={client}>
      <main className="min-h-screen p-2 w-fit space-y-4">
        <Header />

        <section className="flex h-full gap-8">
          <div className="space-y-2">
            <Chats />
          </div>
        </section>
      </main>
    </ApolloNextAppProvider>
  );
}
