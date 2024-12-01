/* eslint-disable @next/next/no-img-element */

import ClearButton from "@/components/clear-btn";
import Hero from "@/components/hero";
import CopyTextarea from "@/components/textarea";
import CopyButton from "@/components/copy-btn";
import SelectSection from "@/components/select-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mt-4 w-full p-4 bg-base-200 rounded-3xl">
        <SelectSection />
      </section>
      <section className="mt-4 w-full p-4 bg-base-200 rounded-3xl mb-24">
        <CopyTextarea />
        <ClearButton />
        <CopyButton />
      </section>
    </main>
  );
}
