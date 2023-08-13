interface Props {
  skill: string;
  handleAdd: (skill: string) => void;
}

export default function Skill({ skill, handleAdd }: Props) {
  return (
    <h3
      onClick={() => handleAdd(skill)}
      className="text-[16px] font-bold leading-[24px] tracking-[-0.12px] text-dark-cyan bg-cyan-filter h-[32px] flex items-center px-[10px] rounded-[4px] hover:text-white hover:bg-dark-cyan cursor-pointer transition-colors"
    >
      {skill}
    </h3>
  );
}
