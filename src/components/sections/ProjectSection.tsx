"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

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
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const layoutClasses = {
    grid: "grid grid-cols-2 md:grid-cols-3 gap-4 xs:grid-cols-1",
    flex: "flex flex-row gap-4 xs:flex-col",
  };

  return (
    <section className="section">
      <h2 className="pb-8">Featured Projects</h2>
      <div className={layoutClasses[projectItems.layout]}>
        {projectItems.items.map((item) => (
          <React.Fragment key={item.key}>{item.component}</React.Fragment>
        ))}
      </div>
    </section>
  );
}
