import { NextResponse } from "next/server";

import item from "@/app/assets/items.json";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json<string[]>(item.data);
}
