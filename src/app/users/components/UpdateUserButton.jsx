"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function UpdateUserButton({ user }) {
  const router = useRouter();

  const handleUpdateUser = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Update User",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Name" value="${user.name}" />
        <input id="swal-email" class="swal2-input" placeholder="Email" value="${user.email}" />
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

    const res = await fetch(`http://localhost:3000/api/items/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (res.ok) {
      Swal.fire("Updated!", "User updated successfully", "success");
      router.refresh();
    } else {
      Swal.fire("Error", "Failed to update user", "error");
    }
  };

  return (
    <button
      onClick={handleUpdateUser}
      className="px-3 py-1 bg-blue-500 text-white rounded text-sm cursor-pointer"
    >
      Update
    </button>
  );
}
