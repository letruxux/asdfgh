"use client";

import toast from "react-hot-toast";
import { usePackages } from "./packages-provider";

export default function CopyButton() {
  const { packages } = usePackages();

  return (
    <button
      className="btn btn-primary w-full"
      onClick={() => {
        navigator.clipboard.writeText(
          packages.map((e) => `winget install -e --id ${e.Id}`).join(";")
        );
        toast.success("Script copied to clipboard!");
      }}
      disabled={packages.length === 0}
    >
      Copy
    </button>
  );
}
