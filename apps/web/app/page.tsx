import { VibePoolCandidates } from "./VibePool/VibePoolCandidates";
import { UserInfoForm } from "./profile/UserInfoForm";
import { UserPreferenceForm } from "./profile/UserPreferencesForm";
import { Header } from "./components/Header";
import { ExploreVibes } from "./vibes/ExploreVibes";
import { OutgoingCall } from "./Calls/OutgoingCall";
import { IncomingCall } from "./Calls/IncomingCall";
import { UserProfile } from "./profile/Profile";
import { ListNotifications } from "./notifications/ListNotifications";
import { UserInfo } from "./Onboarding/UserInfo";
import { UserVibes } from "./Onboarding/UserVibes";
import { UserPreferences } from "./Onboarding/UserPreferences";
import { StoriesQuickPanel } from "./Stories/StoriesQuickPanel";
import { CallHistory } from "./Calls/CallHistory";
import { Chats } from "./chats/Chats";
import { Matches } from "./Match/Matches";

export default function Page(): JSX.Element {
  return <VibePoolCandidates />;
}
