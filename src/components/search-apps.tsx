"use client";

import { useState } from "react";
import ResultsSection from "./search-results-section";

export default function SearchApps() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [searchCounter, setSearchCounter] = useState(0); // Add this line
  const canSearchRightNow = searchQuery.length > 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchQuery);
    setSearchCounter((prev) => prev + 1); // Add this line
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex">
        <label className="input input-bordered flex items-center gap-2 mt-4 pr-0 flex-1">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-secondary"
            disabled={!canSearchRightNow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>
      </form>

      {activeSearch && <ResultsSection q={activeSearch} key={searchCounter} />}
    </>
  );
}
