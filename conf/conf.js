const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwriteCapsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_CAPS_COLLECTION_ID),
    appwriteMugsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_MUGS_COLLECTION_ID),
    appwriteTshirtsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_TSHIRTS_COLLECTION_ID),
    appwriteSweatshirtsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_SWEATSHIRTS_COLLECTION_ID),
    appwriteHoodiesCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_HOODIES_COLLECTION_ID),
    appwriteOrdersCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_ORDERS_COLLECTION_ID),
    appwriteBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
    supabaseUrl: String(process.env.NEXT_PUBLIC_SUPABASE_URL),
    supabaseAnionKey: String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
}

export default conf