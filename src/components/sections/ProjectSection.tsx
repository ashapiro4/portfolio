import React from "react";

type ProjectItem = {
  id: string;
  component: React.ReactNode;
  key: string;
};

export type ProjectItems = {
  layout: "grid" | "flex";
  items: ProjectItem[];
};

export function ProjectSection({
  projectItems,
}: {
  projectItems: ProjectItems;
}) {
  const layoutClasses = {
    grid: "grid grid-cols-2 md:grid-cols-3 gap-4",
    flex: "flex flex-row gap-4",
  };

  return (
    <section className="section">
      <div className={layoutClasses[projectItems.layout]}>
        {projectItems.items.map((item) => (
          <React.Fragment key={item.key}>{item.component}</React.Fragment>
        ))}
      </div>
    </section>
  );
}
