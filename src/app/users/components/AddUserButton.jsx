"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddUserButton() {
  const router = useRouter();

  const handleAddUser = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New User",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Name" />
        <input id="swal-email" class="swal2-input" placeholder="Email" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("swal-name").value;
        const email = document.getElementById("swal-email").value;

        if (!name || !email) {
          Swal.showValidationMessage("Name and Email are required");
          return;
        }

        return { name, email };
      },
    });

    if (!formValues) return;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (res.ok) {
      Swal.fire("Success", "User added successfully", "success");
      router.refresh(); // refresh server data
    } else {
      Swal.fire("Error", "Failed to add user", "error");
    }
  };

  return (
    <button
      onClick={handleAddUser}
      className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
    >
      + Add User
    </button>
  );
}
