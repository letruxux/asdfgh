import { Package } from "@/lib/winget";
import GlobeIcon from "./globe-icon";
import { usePackages } from "./packages-provider";

export default function PackageButton({
  pack,
  style,
}: {
  pack: Package;
  style?: React.CSSProperties;
}) {
  const { packages, addPackage, removePackage } = usePackages();

  const isInstalled = packages.some((p) => p.Id === pack.Id);

  return (
    <li
      className="list-none tooltip"
      style={style}
      data-tip={pack.Latest.Description || pack.Latest.Name}
    >
      <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-300 transition-colors cursor-pointer">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={isInstalled}
          onChange={() => (isInstalled ? removePackage(pack.Id) : addPackage(pack))}
        />
        <span className="text-lg">{pack.Latest.Name}</span>
        {pack.Latest.Homepage && (
          <a href={pack.Latest.Homepage} target="_blank" className="inline-block ml-auto">
            <GlobeIcon />
          </a>
        )}
      </label>
    </li>
  );
}
