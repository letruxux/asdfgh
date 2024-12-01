import { Package } from "@/lib/winget";
import PackageButton from "./package-button";

function prettify(str: string) {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Section({
  name,
  packages,
}: {
  name: string;
  packages: Package[];
}) {
  return (
    <div className="mt-4">
      <h2 className="font-semibold text-xl">{prettify(name)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1">
        {packages
          .sort((a, b) => a.Latest.Name.localeCompare(b.Latest.Name))
          .map((pack) => (
            <PackageButton key={pack.Id} pack={pack} />
          ))}
      </div>
    </div>
  );
}
