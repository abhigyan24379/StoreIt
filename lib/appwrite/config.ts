import process from "process"

export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!, //https://fra.cloud.appwrite.io/v1 , NEXT_PUBLIC_APPWRITE_PROJECT_ID = "6859516500329850199f"
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,  //standard_ab385dfad3bda4c845feb9af77f8c33bdab68032bab7209fc8ced38135f76ed567c1b58cc7633b6dd791b7b5417c57ff7aa8d1d844081eb5bd9984e25ee34aa65cfeaf0085e5c7e986e38c4f4e50d34bb4b5c27e658e403ee39e45d9bf81a0bc694c8600040f14670db4b30113f4dc07e6b57599285c7402cf9fdab5dc99eab4

};
