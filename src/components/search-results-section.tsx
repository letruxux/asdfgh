import { useWingetSearch } from "@/hooks/use-winget-search";
import SearchResult from "./search-result";

export default function ResultsSection({ q }: { q: string }) {
  const { error, loading, result } = useWingetSearch({
    query: q,
    order: -1,
    take: 12,
    ensureContains: true,
    partialMatch: true,
  });

  if (loading) {
    return (
      <div className="w-full flex justify-center mt-4">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center mt-4">
        Error while loading programs: {error.message}
      </p>
    );
  }

  return (
    <div className="mt-4">
      {result?.Packages.map((item) => (
        <SearchResult key={item.Id} item={item} />
      ))}
      {result?.Total === 0 && <p className="text-center opacity-70">No results found</p>}
    </div>
  );
}
