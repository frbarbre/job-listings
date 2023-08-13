import Image from "next/image";

export default function Filter({
  filter,
  handleRemove,
}: {
  filter: string;
  handleRemove: (filter: string) => void;
}) {
  return (
    <article className="flex bg-cyan-filter items-center rounded-[4px]">
      <p className="text-dark-cyan font-bold px-[8px] translate-y-[1px]">
        {filter}
      </p>
      <div
        className="w-[32px] h-[32px] bg-dark-cyan hover:bg-dark-gray-cyan transition-colors flex items-center justify-center rounded-r-[4px] cursor-pointer"
        onClick={() => handleRemove(filter)}
      >
        <Image
          src={"/icon-remove.svg"}
          width={13.5}
          height={13.5}
          alt="close"
        />
      </div>
    </article>
  );
}
