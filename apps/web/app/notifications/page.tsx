import { Header } from "../components/Header";
import { ListNotifications } from "./ListNotifications";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen p-2 basis-3/5 space-y-2">
      <Header />
      <section className="flex h-full gap-8">
        <ListNotifications />
      </section>
    </main>
  );
}
