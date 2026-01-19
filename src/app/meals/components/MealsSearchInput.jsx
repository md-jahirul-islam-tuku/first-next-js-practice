"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealsSearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [search, pathname, router]);

  return (
    <div className="py-8">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="bg-white text-black p-2 rounded-lg"
      />
    </div>
  );
}
