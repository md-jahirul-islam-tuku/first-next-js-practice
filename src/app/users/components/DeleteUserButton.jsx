"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function DeleteUserButton({ userId }) {
  const router = useRouter();

  const handleDeleteUser = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    });

    if (!result.isConfirmed) return;

    const res = await fetch(`http://localhost:3000/api/items/${userId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      Swal.fire("Deleted!", "User has been deleted.", "success");
      router.refresh();
    } else {
      Swal.fire("Error", "Failed to delete user", "error");
    }
  };

  return (
    <button
      onClick={handleDeleteUser}
      className="px-3 py-1 bg-red-500 text-white rounded text-sm ml-2 cursor-pointer"
    >
      Delete
    </button>
  );
}
