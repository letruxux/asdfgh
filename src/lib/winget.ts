import ky from "ky";
import { z } from "zod";

const f = ky.create({
  prefixUrl: "https://api.winget.run/v2",
});

export const SearchParamsSchema = z.object({
  query: z.string(),
  order: z.enum(["1", "-1"]).transform(Number).optional(),
  take: z.number().optional(),
  ensureContains: z.boolean().optional(),
  partialMatch: z.boolean().optional(),
});

export const PackageSchema = z.object({
  Id: z.string(),
  Versions: z.array(z.string()),
  Latest: z.object({
    Name: z.string(),
    Publisher: z.string(),
    Tags: z.array(z.string()),
    Description: z.string(),
    License: z.string().nullable().default(null),
    LicenseUrl: z.string().nullable().default(null),
    Homepage: z.string().nullable().default(null),
  }),
  Featured: z.boolean(),
  IconUrl: z.string().nullable(),
  Banner: z.string().nullable(),
  Logo: z.string().nullable(),
  UpdatedAt: z.string() /* .date() */,
  CreatedAt: z.string() /* .date() */,
  SearchScore: z.number(),
});

export const SearchResponseSchema = z.object({
  Packages: z.array(PackageSchema),
  Total: z.number(),
});

export type SearchParams = z.infer<typeof SearchParamsSchema>;
export type Package = z.infer<typeof PackageSchema>;
export type SearchResponse = z.infer<typeof SearchResponseSchema>;

export async function searchPackages(params: SearchParams): Promise<SearchResponse> {
  const resp = await f.get("packages", {
    searchParams: params,
  });
  if (!resp.ok) {
    throw new Error(await resp.text());
  }
  const json = await resp.json();
  const parsed = SearchResponseSchema.parse(json);
  return parsed;
}

export async function fetchPackage(id: string): Promise<Package> {
  const resp = await f.get(`packages/${id.replace(".", "/")}`);
  if (!resp.ok) {
    throw new Error(await resp.text());
  }
  const json = (await resp.json()) as { Package: Package };
  const parsed = PackageSchema.parse(json.Package);
  return parsed;
}
