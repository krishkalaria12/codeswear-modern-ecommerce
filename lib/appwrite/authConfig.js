import conf from "@/conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice {
    client = new Client();
    account; 

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password, name);
            if (userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Error getting current user");
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    async createPhoneSession(phoneNumber) {
        try {
            const sessionToken = await account.createPhoneSession(ID.unique(), ("+91" + String(phoneNumber)));
            return sessionToken.userId;
        } catch (error) {
            throw error;
        }
    }
    
    async updatePhoneSession(userId, secretId) {
        try {
            await account.updatePhoneSession(String(userId), String(secretId));
        } catch (error) {
            throw error;
        }
    } 

    async isLoggedIn(sessionId) {
        try {
            return await this.account.getSession(String(sessionId));
        } catch (error) {
            throw error;
        }
    }
}

const authService = new Authservice();

export default authService;

