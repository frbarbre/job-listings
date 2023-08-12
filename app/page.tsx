"use client";

import { useEffect, useState } from "react";
import { jobListings } from "@/data";
import { JobType } from "@/types";
import { filterList } from "@/utils/filterList";

export default function Home() {
  const [filteredJobs, setFilteredJobs] = useState(jobListings);
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
    setFilters([]);
  }

  useEffect(() => {
    const arr: string[][] = jobListings.map((job) => [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ]);

    const newData = arr.reduce((acc: JobType[], arr, index) => {
      if (filterList(arr, filters)) {
        acc.push(jobListings[index]);
      }
      return acc;
    }, []);

    setFilteredJobs(newData);
    console.log("Ran");
  }, [filters]);
  return (
    <main className="flex flex-col gap-10">
      <h1 onClick={handleReste}>Reset</h1>
      <div className="flex gap-5">
        {filters.map((filter) => (
          <h2 onClick={() => handleRemove(filter)} className="text-green-500">
            {filter}
          </h2>
        ))}
      </div>
      {filteredJobs.map((job) => (
        <div className="flex items-center gap-10">
          <h2>{job.company}</h2>
          <article className="flex gap-5">
            <h3 onClick={() => handleAdd(job.role)}>{job.role}</h3>
            <h3 onClick={() => handleAdd(job.level)}>{job.level}</h3>

            {job.languages.map((language) => (
              <h3 onClick={() => handleAdd(language)}>{language}</h3>
            ))}

            {job.tools.map((tool) => (
              <h3 onClick={() => handleAdd(tool)}>{tool}</h3>
            ))}
          </article>
        </div>
      ))}
    </main>
  );
}
