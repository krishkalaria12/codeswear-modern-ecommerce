import conf from '@/conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({name, slug, size, color, description, isAvailable, imageurl,price,discountedPrice}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTshirtsCollectionId,
                slug,
                {
                    name,
                    size,
                    color,
                    description,
                    isAvailable,
                    imageurl,
                    price,
                    discountedPrice
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug,{name, size, color, description, isAvailable, imageurl, price,discountedPrice}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTshirtsCollectionId,
                slug,
                {
                    name,
                    size,
                    color,
                    description,
                    isAvailable,
                    imageurl,
                    price,
                    discountedPrice
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTshirtsCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPostBySlug(slug, category ,queries = [Query.equal("slug", slug)]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                category,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getAllOrders(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteOrdersCollectionId,
            )
        } catch (error) {
            console.log("Appwrite serive :: getOrders :: error", error);
            return false
        }
    }

    async getPostsByName(name, category ,queries = [Query.equal("name", name)]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                category,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getPostsByAvailability(queries = [Query.equal("isAvailable", true)]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteTshirtsCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getAllPosts(category) {
        try {
            const data =  await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                category,
            )
            return data    
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: error", error);
            return false
        }
    }

    async createOrder({firstname,lastname,email,phoneno,city,country,flatno,postalCode ,state, orderid}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteOrdersCollectionId,
                ID.unique(),
                {firstname,lastname,email,phoneno,city,country,flatno,state,orderid,postalCode}
            )
        } catch (error) {
            console.log("Appwrite service :: createOrder :: error", error);
            return false
        }
    }
}


const service = new Service()
export default service