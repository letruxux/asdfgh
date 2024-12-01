import { NextResponse } from "next/server";
import { getCategorizedData } from "@/data/data";

const categorizedData = getCategorizedData();

export const GET = async () => {
  return NextResponse.json(categorizedData);
};
