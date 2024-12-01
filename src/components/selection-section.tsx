"use client";

import { useState } from "react";
import CommonPicks from "./common-picks";
import SearchApps from "./search-apps";
import clsx from "clsx";

export default function SelectionSection() {
  const [selected, setSelected] = useState<"common-picks" | "search">("common-picks");

  return (
    <>
      <div role="tablist" className="tabs tabs-boxed w-[50%] mx-auto bg-base-300 gap-1">
        <a
          role="tab"
          className={clsx("tab hover:bg-base-100 transition-colors", {
            "tab-active": selected === "common-picks",
          })}
          onClick={() => setSelected("common-picks")}
        >
          Common picks
        </a>
        <a
          role="tab"
          className={clsx("tab hover:bg-base-100 transition-colors", {
            "tab-active": selected === "search",
          })}
          onClick={() => setSelected("search")}
        >
          Search
        </a>
      </div>

      <div style={{ display: selected === "common-picks" ? "block" : "none" }}>
        <CommonPicks />
      </div>

      <div style={{ display: selected === "search" ? "block" : "none" }}>
        <SearchApps />
      </div>
    </>
  );
}
