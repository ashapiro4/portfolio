import { Card } from "@/components/composites/Card";
import { PageContainer, Sections } from "@/components/PageContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  ProjectItems,
  ProjectSection,
} from "@/components/sections/ProjectSection";

export default function Home() {
  const projectItems: ProjectItems = {
    layout: "grid",
    items: [
      {
        id: "hero-item-1",
        component: Card({
          cardType: "project",
          card: {
            title: "Project 1",
            description: "Description 1",
            link: "https://github.com",
          },
        }),
        key: "hero-item-1",
      },
      {
        id: "hero-item-2",
        component: Card({
          cardType: "blog",
          card: {
            title: "Blog 1",
            description: "Description 1",
            article: "Article 1",
          },
        }),
        key: "hero-item-2",
      },
      {
        id: "hero-item-3",
        component: Card({
          cardType: "project",
          card: {
            title: "Project 2",
            description: "Description 2",
            link: "https://github.com",
          },
        }),
        key: "hero-item-3",
      },
    ],
  };

  const homeSections: Sections = [
    {
      id: "hero",
      component: <HeroSection />,
      key: "hero",
    },
    {
      id: "project",
      component: <ProjectSection projectItems={projectItems} />,
      key: "project",
    },
  ];

  return <PageContainer sections={homeSections} />;
}
