import { nanoid } from "nanoid";
import Image from "next/image";
import Tag from "./Tag";
import Dot from "./Dot";
import Skill from "./Skill";
import { motion as m, AnimatePresence } from "framer-motion";

interface Props {
  skills: string[];
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  postedAt: string;
  location: string;
  contract: string;
  handleAdd: (skill: string) => void;
  index: number;
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
  contract,
  handleAdd,
  index,
}: Props) {
  return (
    <AnimatePresence>
      <m.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.1 * index }}
        className="flex md:items-center gap-[16px] bg-white flex-col md:flex-row shadow-3xl rounded-[5px] justify-between relative pt-[32px] p-[24px] md:py-[32px] md:px-[40px]"
      >
        <section className="flex items-center md:gap-[24px]">
          <Image
            src={logo}
            alt={`${company}-logo`}
            width={88}
            height={88}
            className="w-[48px] aspect-square md:w-[88px] absolute top-[-24px] left-[24px] md:relative md:top-0 md:left-0"
          />
          <article className="flex flex-col">
            <article className="flex gap-[15px] items-center pb-[9px] md:pb-[10px] flex-wrap">
              <h2 className="font-bold text-dark-cyan text-[13px] md:text-[18px]">
                {company}
              </h2>
              <article className="flex gap-[8px] flex-wrap">
                {isNew && <Tag variant="new" />}
                {isFeatured && <Tag variant="featured" />}
              </article>
            </article>
            <h2 className="font-bold text-[15px] leading-[24px] text-dark-gray-cyan md:text-[22px] hover:text-dark-cyan transition-colors cursor-pointer pb-[8px] md:pb-[7px]">
              {position}
            </h2>
            <article className="text-gray-cyan flex-wrap font-medium leading-[24px] tracking-[-0.12px] text-[16px] md:text-[18px] md:tracking-[-0.14px] flex gap-[16px] items-center">
              <h3>{postedAt}</h3>
              <Dot />
              <h3>{contract}</h3>
              <Dot />
              <h3>{location}</h3>
            </article>
          </article>
        </section>
        <hr className="h-[1px] bg-gray-cyan md:hi" />
        <article className="flex gap-5 flex-wrap">
          {skills.map((skill) => (
            <Skill key={nanoid()} skill={skill} handleAdd={handleAdd} />
          ))}
        </article>
        {isFeatured && (
          <div className="rounded-l-[5px] w-[5px] bg-dark-cyan absolute top-0 left-0 bottom-0" />
        )}
      </m.section>
    </AnimatePresence>
  );
}
