import AddUserButton from "./components/AddUserButton";
import DeleteUserButton from "./components/DeleteUserButton";
import UpdateUserButton from "./components/UpdateUserButton";

export default async function UsersPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
    cache: "force-cache",
  });

  const users = await res.json();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">All Users: {users.length}</h1>

        <AddUserButton />
      </div>

      <table className="w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-black">
            <th className="border px-3 py-2 text-left">Name</th>
            <th className="border px-3 py-2 text-left">Email</th>
            <th className="border px-3 py-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border px-3 py-2">{user.name}</td>
              <td className="border px-3 py-2">{user.email}</td>
              <td className="border px-3 py-2 text-center">
                {/* <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                  Update
                </button> */}
                <UpdateUserButton user={user} />
                <DeleteUserButton userId={user._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
