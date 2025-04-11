# Portfolio Website Doc

Created by: Anya Shapiro
Created time: April 10, 2025 12:42 PM
Category: Planning, Process
Last updated time: April 10, 2025 9:46 PM

# 🧠 Project Overview

**Name: Portfolio Website**

**Type:** Web app

**Date Started: 04/10/2025**

**Date Completed:**

**Tech Stack: Nextjs, websockets, SQL, typescript, react, tailwind, mdx, motion, cloudflare suite**

**Goal: Create a centralized place to showcase projects, documentation, a blog, a resume, my skills, and learning progress.**

---

# 🗺️ Planning

**Problem/Need Identified: A lack of organization when it came to creating new projects and a poor way of representing myself as a developer.**

**Target Users: Employers, teachers, and students in the software field.**

**Key Features:**

- Real-time chat feature that displays whether I’m online or not and can chat with people.
- Dynamic project showcases where users can interact with a live demo, view source code and live code snippets, and see changelog of updates. Filters and tags will be used for ease of search.
- Tech Stack Visualizations to build interactive visualizations of the tools, languages, and frameworks I’ve used and how they interconnect.
- Connect to github actions or other pipelines for my projects so visitors can see my process and tests in real-time.
- Interactive timeline and learning tracker where users can explore my milestones, the details and projects that got me to that milestone, as well as learning resources I used and a review and summary of them.

**Initial Scope: An interactive portfolio and centralized source for all things related to my software development timeline.**

**Success Criteria: All features above are implemented, good load times, clear communication of ideas, smooth UX.**

---

# 🛠️ Process

**Milestones:**

- [x] Idea validation
- [ ] MVP development
- [ ] Key feature implementation
- [ ] Testing & Debugging
- [ ] Launch

## **Challenges Encountered and Solutions:**

### **Idea validation**

- Deciding the scope of the project in terms of features to implement and libraries I could use.
  - The Content Management System:
    - I sat down and decided I would deploy to Cloudflare’s workers and pages. I also wanted to use a content management system so I could update my projects, documentation, and other assets with ease. The CMS needed to be self-hosted or at least hosted on Cloudflare for low costs. I could have used strapi, contentful, sanity, and other providers but spreading the resources for this project across multiple vendors wasn’t ideal. It would be unmanageable.
    - I came across a technology known as Payload CMS, a content management system which is built for Nextjs and flexibility for developers. Unfortunately, the system did not work well with Cloudflare workers as of today 04/10/2025.
    - I realized that my highly specific problem of wanting a customizable CMS that wasn’t vendor locked, was self hosted, and worked with Cloudflare workers would need a specific solution. I would have to create a local content management system that could plug into my Cloudflare’s storage remotely. A new challenge and learning opportunity has presented itself. The scope of my project grows.
    - How I would structure each datum of a project:
      - Each project would have to follow a similar structure to easily store the file in storage and pull it out and parse it into the components I needed. Each project would contain a live demo, documentation, media, results, and learnings as well as other wildcards. To represent this, I decided to use JSON files and objects. I had worked with JSON before when I was younger. Using them extensively with Minecraft mod and plugin development. Not to mention with my other web development projects.
      - Not wanting to re-invent the wheel, I searched for libraries that were able to give the desired features of: Markdown parsing and Component generation all from a JSON object. I came across MDX which seemed to be like JSX but for markdown formats. Perfect. Then I discovered loads of plugins for that which included JSON parsing and serializing to convert JSON files from JSON to React components and markdown documentation.
      - Those libraries are: Next MDX (the core), Next MDX Remote (To retrieve remote files that don’t live inside the application, but for example, a Cloudflare R2(S3 comaptible storage)), Remark and Rehype (Transforming plaintext into HTML)
    - The easy CMS solution was to then create a simple script that I could run on my computer that would take the files in certain folders, serialize them to JSON, and ship them to the storage system of choice.
    - I decided on Cloudflare’s R2 system, because it seems to handle bigger files and assets which my project would need. But I decided that the metadata for each project, such as “Project Name”, “Date Created”, “Description”, etc. could be stored in Cloudflare’s D1 database based on SQLite.
- The React UI Library
  - Until this point, I’ve always used Shadcn UI or another library and just made small tweaks here and there. This process tremendously limited my understanding of React UI components. And as I started coding, I figured this was a good time for another project! I would create my own React UI Library with reusable and customizable components that I could use in other projects down the line. It would be a library that I understood from the inside out, thus broadening my understanding of frontend development.
  - A link to that project’s documentation is here: LINK

### **MVP Development**

- For the webapp, I wanted a structure that made it easy to fetch data and feed it into custom components via objects and into the props. I also wanted a semi-centralized place, a single component where I could compose my data into objects. To achieve this, the following structure was introduced:

  - Component Hierarchy

  ```mermaid
  ---
  title: Component Diagram
  ---
  classDiagram
  	class Page {
  		-Sections
  		-SectionItems
  		-CardContent
  		Fetch()
  		Sort()
  	}
    class PageContainer {
  	  -Section 1
  	  -Section 2
  	  -Section 3
  	  Page()
    }
    class HeroSection {
  	  -Primitive
  	  -Primitive
  	  -Primitive
  	  PageContainer()
    }
    class ProjectSection {
  	  -Primitive
  	  -CardType=Project
  	  -Card
  	  -Card
  	  PageContainer()
    }
    class BlogSection {
  	  -Primitive
  	  -CardType=Blog
  	  -Card
  	  -Card
  	  PageContainer()
    }
    class Card {
  	  - cardType
  	  Sections()
    }
    class ProjectCard {
  	  -Primitive
  	  -Primitive
  	  -Primitive
  	  Card()
    }
    class BlogCard {
  	  -Primitive
  	  -Primitive
  	  -Primitive
  	  Card()
    }

    Page --> PageContainer
    PageContainer --> ProjectSection
    PageContainer --> HeroSection
    PageContainer --> BlogSection
    BlogSection --> Card
    HeroSection --> Card
    ProjectSection --> Card
    Card --> ProjectCard
    Card --> BlogCard


  ```

---

# 🎯 Execution

**Development Notes:**

## **Tools Used:**

**Design Notes:**

---

# ✅ Results

**Final Scope vs Initial Scope:**

**Demo:** [Link here]

**Code Repo:** [GitHub link]

## **What Went Well:**

## **What Could Be Better:**

## **Next Steps:**

---

# 📓 Learnings

## **What I Learned:**

**Favorite Part:**

**Hardest Part:**

---

# 🖼️ Media

> Add screenshots, diagrams, or mockups here
