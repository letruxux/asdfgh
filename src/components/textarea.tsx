"use client";

import { usePackages } from "./packages-provider";

export default function CopyTextarea() {
  const { packages } = usePackages();

  return (
    <>
      <textarea
        className="w-full h-48 textarea textarea-bordered cursor-pointer"
        value={packages.map((e) => `winget install -e --id ${e.Id}`).join(";")}
        readOnly
        onClick={(e) => {
          e.currentTarget.select();
          navigator.clipboard.writeText(e.currentTarget.value);
        }}
      />
    </>
  );
}
