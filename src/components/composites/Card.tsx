type ProjectCard = {
  title: string;
  description: string;
  link: string;
};

type BlogCard = {
  title: string;
  description: string;
  article: string;
};

type CardProps = {
  cardType: "project" | "blog";
  card: ProjectCard | BlogCard;
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
  } else {
    card = card as BlogCard;
    return (
      <div className="card">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <p>{card.article}</p>
      </div>
    );
  }
}
