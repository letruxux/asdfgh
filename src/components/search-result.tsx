import { Package } from "@/lib/winget";
import { usePackages } from "./packages-provider";

export default function SearchResult({ item }: { item: Package }) {
  const { addPackage, removePackage, packages } = usePackages();
  const isInstalled = packages.some((p) => p.Id === item.Id);

  return (
    <div className="card bg-base-200 shadow-xl mb-4 p-4 border-base-300 border-2">
      <div className="mb-2">
        {item.Latest.Homepage ? (
          <a href={item.Latest.Homepage}>
            <h3 className="font-bold font-xl hover:underline">{item.Latest.Name}</h3>
          </a>
        ) : (
          <h3 className="font-bold font-xl">{item.Latest.Name}</h3>
        )}
        <p className="truncate">{item.Latest.Description}</p>
        <div className="text-sm opacity-70">
          Version: {item.Versions[0] ?? "N/A"} | Publisher: {item.Latest.Publisher}
        </div>
      </div>
      <div className="flex justify-end items-center gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={isInstalled}
          onChange={() => (isInstalled ? removePackage(item.Id) : addPackage(item))}
        />
        <a
          className="hover:underline"
          href={`https://winget.run/pkg/${item.Id.split(".").join("/")}`}
          target="_blank"
        >
          More info...
        </a>
      </div>
    </div>
  );
}
