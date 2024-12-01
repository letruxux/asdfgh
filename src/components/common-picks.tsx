"use client";

import useSectionsData from "@/hooks/use-sections";
import Section from "./section";

export default function CommonPicks() {
  const { error, loading, sections } = useSectionsData();

  return (
    <>
      {/* <h1 className="font-bold text-3xl">Common picks</h1> */}
      {loading && (
        <div className="w-full flex justify-center mt-4">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {error && (
        <p className="text-red-500 text-center mt-4">
          Error while loading programs: {error.message}
        </p>
      )}
      {sections &&
        Object.entries(sections).map(([name, packages]) => (
          <Section key={name} name={name} packages={packages} />
        ))}
    </>
  );
}
