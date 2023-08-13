interface Props {
  variant: "new" | "featured";
}

export default function Tag({ variant }: Props) {
  return (
    <article
      className={`rounded-full text-white font-bold text-[14px] leading-[14px] tracking-[-0.11px] w-max px-[8.6px] pt-[6px] pb-[4px] uppercase ${
        variant === "featured"
          ? "bg-dark-gray-cyan"
          : variant === "new"
          ? "bg-dark-cyan"
          : ""
      }`}
    >
      {variant === "new" ? "New!" : variant === "featured" ? "Featured" : ""}
    </article>
  );
}
