type ProjectCard = {
  title: string;
  description: string;
  link: string;
};

type BlogCard = {
  title: string;
  description: string;
  content: string;
  link: string;
};

type TimelineCard = {
  title: string;
  description: string;
  date: string;
};

type CardProps = {
  cardType: "project" | "blog" | "timeline";
  card: ProjectCard | BlogCard | TimelineCard;
};

export function Card({ cardType, card }: CardProps) {
  if (cardType === "project") {
    card = card as ProjectCard;
    return (
      <div className="card">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <a href={card.link}>Link</a>
      </div>
    );
  } else if (cardType === "blog") {
    card = card as BlogCard;
    return (
      <div className="card">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <p>{card.content}</p>
        <a href={card.link}>Link</a>
      </div>
    );
  } else if (cardType === "timeline") {
    card = card as TimelineCard;
    return (
      <div className="card">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <p>{card.date}</p>
      </div>
    );
  }
}
