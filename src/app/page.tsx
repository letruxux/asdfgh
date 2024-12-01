/* eslint-disable @next/next/no-img-element */
"use client";

import ClearButton from "@/components/clear-btn";
import Hero from "@/components/hero";
import CopyTextarea from "@/components/textarea";
import useSectionsData from "@/hooks/useSectionsData";
import Section from "@/components/section";
import CopyButton from "@/components/copy-btn";

export default function Home() {
  const { error, loading, sections } = useSectionsData();

  return (
    <main>
      <Hero />
      <section className="mt-4 w-full p-4 bg-base-200 rounded-3xl">
        <div>
          <h1 className="font-bold text-3xl">Common picks</h1>
          {loading && (
            <div className="w-full flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
          {error && (
            <p className="text-red-500 text-center">
              Error while loading programs: {error.message}
            </p>
          )}
          {sections &&
            Object.entries(sections).map(([name, packages]) => (
              <Section key={name} name={name} packages={packages} />
            ))}
        </div>
      </section>
      <section className="mt-4 w-full p-4 bg-base-200 rounded-3xl mb-24">
        <CopyTextarea />
        <ClearButton />
        <CopyButton />
      </section>
    </main>
  );
}
