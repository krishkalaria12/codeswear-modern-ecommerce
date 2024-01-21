const conf = {
    appwriteUrl: String(process.env.APPWRITE_URL),
    appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.appwriteDatabaseId),
    appwriteCapsCollectionId: String(process.env.APPWRITE_CAPS_COLLECTION_ID),
    appwriteMugsCollectionId: String(process.env.APPWRITE_MUGS_COLLECTION_ID),
    appwriteTshirtsCollectionId: String(process.env.APPWRITE_TSHIRTS_COLLECTION_ID),
    appwriteSweatshirtsCollectionId: String(process.env.APPWRITE_SWEATSHIRTS_COLLECTION_ID),
    appwriteHoodiesCollectionId: String(process.env.APPWRITE_HOODIES_COLLECTION_ID),
    appwriteBucketId: String(process.env.appwriteBucketId),
}

export default conf