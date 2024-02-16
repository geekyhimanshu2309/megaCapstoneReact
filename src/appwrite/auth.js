import conf from "../conf/conf/conf";
import {Client, Account, ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                //call another method

            }else{
                return userAccount;
            }
        }
        catch(err){
            throw err;
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("GetCurrentUser Error:",error);
        }
        return null;
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite service:: logout :: error :", error);
        }
    }
}

const authService = new AuthService();

export default authService