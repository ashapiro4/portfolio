import React from "react";

type Section = {
  component: React.ReactNode;
  id: string;
  key: string;
};

export type Sections = Section[];

export function PageContainer({ sections }: { sections: Sections }) {
  return (
    <div className="page-container">
      {sections.map((section) => (
        <React.Fragment key={section.key}>{section.component}</React.Fragment>
      ))}
    </div>
  );
}
