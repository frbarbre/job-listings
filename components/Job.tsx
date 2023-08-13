import { nanoid } from "nanoid";
import Image from "next/image";

interface Props {
  skills: string[];
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  postedAt: string;
  location: string;
  handleAdd: (skill: string) => void;
}

export default function Job({
  skills,
  company,
  logo,
  isNew,
  isFeatured,
  position,
  postedAt,
  location,
  handleAdd,
}: Props) {
  return (
    <div className="flex items-center gap-10">
      <Image src={logo} alt={`${company}-logo`} width={88} height={88} />
      <article className="flex flex-col">
        <article>
          <h2>{company}</h2>
        </article>
        <h2>{position}</h2>
        <article>
          <h3>{postedAt}</h3>
        </article>
      </article>
      <article className="flex gap-5">
        {skills.map((skill) => (
          <h3 key={nanoid()} onClick={() => handleAdd(skill)}>
            {skill}
          </h3>
        ))}
      </article>
    </div>
  );
}
