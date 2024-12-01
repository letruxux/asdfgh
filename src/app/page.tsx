/* eslint-disable @next/next/no-img-element */

import ClearButton from "@/components/clear-btn";
import Hero from "@/components/hero";
import CopyTextarea from "@/components/textarea";
import CopyButton from "@/components/copy-btn";
import FaqSection from "@/components/faq-section";
import SelectionSection from "@/components/selection-section";
import ReviewModal from "@/components/review-modal-toggle";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mt-4 w-full p-4 bg-base-200 rounded-3xl">
        <SelectionSection />
      </section>
      <section className="w-full p-4 bg-base-200 rounded-3xl my-12">
        <CopyTextarea />
        <ClearButton />
        <ReviewModal />
        <CopyButton />
      </section>
      <section className="mt-4 w-full bg-base-200 rounded-3xl mb-24">
        <FaqSection />
      </section>
    </main>
  );
}
