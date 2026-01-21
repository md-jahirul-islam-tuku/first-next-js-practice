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


// MONGO_URI=mongodb+srv://userManagementDB:Qw2aKihyS5hqEPm0@cluster0.dvetdgy.mongodb.net/?appName=Cluster0
// DB_NAME=usersDB
// NEXT_PUBLIC_BASE_URL=https://first-next-js-topaz.vercel.app
// NEXTAUTH_SECRET=asfdsdf-asdfasfsaf-asdfsdaf-asdfasdf