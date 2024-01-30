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

    async updatePhone(phone, password) {
        try {
            const phoneAccount = await this.account.updatePhone(phone, password);
            return phoneAccount;
        } catch (error) {
            throw error;
        }
    }

    async updatePhoneVerification(secret, userId) {
        try {
            const phoneAccount = await this.account.updatePhoneVerification(userId, secret);
            return phoneAccount;
        } catch (error) {
            throw error;
        }
    }

    async createPhoneVerification() {
        try {
            const verification = await this.account.createPhoneVerification();
            return verification
        } catch (error) {
            throw error;
        }
    } 

    async updatePassword(newPass, oldPass) {
        try {
            const updatePassword = await this.account.updatePassword(newPass, oldPass);
            return updatePassword;
        } catch (error) {
            throw Error
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

