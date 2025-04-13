import { Timeline } from "../ui/timeline";

type TimeEntry = {
  title: string;
  content: React.ReactNode;
};

export type TimeItems = {
  items: TimeEntry[];
};

export function TimeSection({ timeItems }: { timeItems: TimeItems }) {
  return (
    <section className="section">
      <h2>Timeline</h2>
      <Timeline data={timeItems.items} />
    </section>
  );
}
