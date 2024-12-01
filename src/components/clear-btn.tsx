"use client";

import { usePackages } from "./packages-provider";

export default function ClearButton() {
  const { packages, clearPackages } = usePackages();

  return (
    <button
      className="btn btn-ghost hover:bg-red-500 hover:text-white w-full mb-2"
      onClick={() => clearPackages()}
      disabled={packages.length === 0}
    >
      Clear
    </button>
  );
}
