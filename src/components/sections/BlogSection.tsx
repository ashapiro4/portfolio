import { Card } from "../composites/Card";

type BlogItem = {
  title: string;
  description: string;
  content: string;
  link: string;
};

export type BlogItems = {
  items: BlogItem[];
};

export function BlogSection({ blogItems }: { blogItems: BlogItems }) {
  return (
    <section className="section">
      <h2>Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogItems.items.map((blogItem: BlogItem) => (
          <Card key={blogItem.title} cardType="blog" card={blogItem} />
        ))}
      </div>
    </section>
  );
}
