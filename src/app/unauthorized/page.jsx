"use client";

import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
        <ShieldAlert className="mx-auto text-red-500" size={60} />

        <h1 className="text-2xl font-bold mt-4 text-gray-800">
          Access Denied
        </h1>

        <p className="text-gray-600 mt-2">
          You do not have permission to access this page. Only for Admin.
        </p>

        <div className="mt-6 flex justify-center gap-4 text-black">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-lime-500 rounded-lg hover:bg-lime-600 cursor-pointer"
          >
            Go Home
          </button>

          <button
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
