"use client";

import { useState } from "react";
import { data } from "@/data";
import { nanoid } from "nanoid";

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

  const filteredJobs = data.filter((job) =>
    filters.every(
      (catagory) =>
        Object.values(job).includes(catagory) ||
        Object.values(job.tools).includes(catagory) ||
        Object.values(job.languages).includes(catagory)
    )
  );

  return (
    <main className="flex flex-col gap-10">
      <h1 onClick={() => setFilters([])}>Reset</h1>
      <div className="flex gap-5">
        {filters.map((filter) => (
          <h2 key={nanoid()} onClick={() => handleRemove(filter)} className="text-green-500">
            {filter}
          </h2>
        ))}
      </div>
      {filteredJobs.map((job) => {
        const skills = [job.role, job.level, ...job.languages, ...job.tools];

        return (
          <div key={nanoid()} className="flex items-center gap-10">
            <h2>{job.company}</h2>
            <article className="flex gap-5">
              {skills.map((skill) => (
                <h3 key={nanoid()} onClick={() => handleAdd(skill)}>{skill}</h3>
              ))}
            </article>
          </div>
        );
      })}
    </main>
  );
}
