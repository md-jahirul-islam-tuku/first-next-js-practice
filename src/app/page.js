import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session=await getServerSession(authOptions)
  return (
    <div>
      <h1>Hello world!</h1>

      <p className="mt-10 text-amber-400">Client Auth</p>
      <UserInfo/>
      <p className="mt-10 text-red-400">Session Auth</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
