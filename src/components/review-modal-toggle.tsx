"use client";

import { usePackages } from "./packages-provider";
import useReviewModal from "./packages-review";

export default function ReviewModal() {
  const { modal, openModal } = useReviewModal();
  const { packages } = usePackages();

  return (
    <>
      <button
        className="btn btn-secondary w-full mb-2"
        onClick={() => openModal()}
        disabled={packages.length === 0}
      >
        View selected packages
      </button>
      {modal}
    </>
  );
}
