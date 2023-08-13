"use client";

import { useState } from "react";
import { data } from "@/data";
import Job from "@/components/Job";
import Filters from "@/components/Filters";

export default function Home() {
  const [filters, setFilters] = useState<string[]>([]);

  function handleAdd(filter: string) {
    const isFilterActive = filters.find((data) => data === filter);
    if (!isFilterActive) {
      setFilters([...filters, filter]);
    }
  }

  function handleRemove(option: string) {
    setFilters(filters.filter((filter) => filter !== option));
  }

  function handleReset() {
    setFilters([])
  }

  const filteredJobs = data.filter((job) =>
    filters.every(
      (catagory) =>
        Object.values(job).includes(catagory) ||
        Object.values(job.tools).includes(catagory) ||
        Object.values(job.languages).includes(catagory)
    )
  );

  return (
    <section className="flex flex-col">
      <div className="flex gap-5">
        <Filters filters={filters} handleRemove={handleRemove} handleReset={handleReset} />
      </div>
      <section className="flex flex-col gap-[40px] md:gap-[24px] pb-[34px] pt-[56px] md:pb-[120px] md:pt-[40px]">
        {filteredJobs.map((job, index) => {
          const skills = [job.role, job.level, ...job.languages, ...job.tools];
          return (
            <Job
              key={job.id}
              skills={skills}
              handleAdd={handleAdd}
              company={job.company}
              logo={job.logo}
              isNew={job.new}
              isFeatured={job.featured}
              position={job.position}
              postedAt={job.postedAt}
              location={job.location}
              contract={job.contract}
              index={index}
            />
          );
        })}
      </section>
    </section>
  );
}
