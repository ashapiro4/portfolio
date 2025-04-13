import Image from "next/image";

export type Skill = {
  name: string;
  level: number;
  image: string;
};

type SkillSectionProps = {
  skills: Skill[];
};

export function SkillSection({ skills }: SkillSectionProps) {
  return (
    <section className="section">
      <h2 className="pb-8">Skills</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <h5>{skill.name}</h5>
            <Image src={skill.image} alt={skill.name} width={50} height={50} />
          </div>
        ))}
      </div>
    </section>
  );
}
