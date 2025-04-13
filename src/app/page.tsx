import { Card } from "@/components/composites/Card";
import { PageContainer, Sections } from "@/components/PageContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  ProjectItems,
  ProjectSection,
} from "@/components/sections/ProjectSection";
import { TimeSection, TimeItems } from "@/components/sections/TimeSection";
import { SkillSection, Skill } from "@/components/sections/SkillSection";
import { BlogSection, BlogItems } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

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
          cardType: "project",
          card: {
            title: "Project 2",
            description: "Description 2",
            link: "https://github.com",
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

  const timeItems: TimeItems = {
    items: [
      {
        title: "Time 1",
        content: (
          <Card
            cardType="timeline"
            card={{
              title: "Time 1",
              description: "Description 1",
              date: "2021-01-01",
            }}
          />
        ),
      },
      {
        title: "Time 2",
        content: (
          <Card
            cardType="timeline"
            card={{
              title: "Time 2",
              description: "Description 2",
              date: "2021-01-01",
            }}
          />
        ),
      },
      {
        title: "Time 3",
        content: (
          <Card
            cardType="timeline"
            card={{
              title: "Time 3",
              description: "Description 3",
              date: "2021-01-01",
            }}
          />
        ),
      },
    ],
  };

  const skills: Skill[] = [
    {
      name: "Skill 1",
      level: 1,
      image: "/nextjs.svg",
    },
    {
      name: "Skill 2",
      level: 2,
      image: "/nextjs.svg",
    },
    {
      name: "Skill 3",
      level: 3,
      image: "/nextjs.svg",
    },
    {
      name: "Skill 4",
      level: 4,
      image: "/nextjs.svg",
    },
    {
      name: "Skill 5",
      level: 5,
      image: "/nextjs.svg",
    },
    {
      name: "Skill 6",
      level: 6,
      image: "/nextjs.svg",
    },
    {
      name: "Skill 7",
      level: 7,
      image: "/nextjs.svg",
    },
    {
      name: "Skill 8",
      level: 8,
      image: "/nextjs.svg",
    },
  ];

  const blogItems: BlogItems = {
    items: [
      {
        title: "Blog 1",
        description: "Description 1",
        content: "Content 1",
        link: "https://github.com",
      },
      {
        title: "Blog 2",
        description: "Description 2",
        content: "Content 2",
        link: "https://github.com",
      },
      {
        title: "Blog 3",
        description: "Description 3",
        content: "Content 3",
        link: "https://github.com",
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
    {
      id: "skill",
      component: <SkillSection skills={skills} />,
      key: "skill",
    },
    {
      id: "time",
      component: <TimeSection timeItems={timeItems} />,
      key: "time",
    },
    {
      id: "blog",
      component: <BlogSection blogItems={blogItems} />,
      key: "blog",
    },
    {
      id: "contact",
      component: <ContactSection />,
      key: "contact",
    },
  ];

  return <PageContainer sections={homeSections} />;
}
