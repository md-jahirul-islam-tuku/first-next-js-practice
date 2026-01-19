import { MongoClient, ServerApiVersion } from "mongodb";

export function dbConnect(collectionName) {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
}


// MONGO_URI=mongodb+srv://userManagementDB:Qw2aKihyS5hqEPm0@cluster0.dvetdgy.mongodb.net/?appName=Cluster0
// DB_NAME=usersDB
