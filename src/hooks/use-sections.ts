import { Package } from "@/lib/winget";
import { useEffect, useState } from "react";

const categories: { [key: string]: Package[] } = {
  browsers: [],
  gaming: [],
  media: [],
  runtimes: [],
  social: [],
  developing: [],
  design: [],
  file_utilities: [],
  utilities: [],
};

export default function useSectionsData() {
  const [sections, setSections] = useState<typeof categories>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fetched = await fetch("/cat");

        if (!fetched.ok) {
          throw new Error(`HTTP error! status: ${fetched.status}`);
        }

        const data = (await fetched.json()) as typeof categories;
        setSections(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch sections"));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { sections, loading, error };
}
