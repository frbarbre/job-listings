import { nanoid } from "nanoid";
import Filter from "./Filter";
import { motion as m, AnimatePresence } from "framer-motion";

export default function Filters({
  filters,
  handleRemove,
  handleReset,
}: {
  filters: string[];
  handleRemove: (filter: string) => void;
  handleReset: () => void;
}) {
  return (
    <article className="min-h-[72px] mt-[120px] w-full">
      <AnimatePresence>
        {filters.length !== 0 && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white shadow-3xl w-full h-full flex items-center gap-[25px] flex-wrap xs:flex-nowrap justify-between px-[25px] md:px-[40px] py-[20px] rounded-[5px]"
          >
            <article className="flex gap-4 flex-wrap">
              {filters.map((filter) => (
                <Filter
                  filter={filter}
                  handleRemove={handleRemove}
                  key={nanoid()}
                />
              ))}
            </article>
            <button
              className="font-bold leading-[24px] tracking-[-0.12px] text-gray-cyan hover:text-dark-cyan hover:underline transition-colors"
              onClick={handleReset}
            >
              Clear
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </article>
  );
}
