import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";

import CredentialProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    session: {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60
    },
    providers: [
        CredentialProvider({
            credentials : {
                email : {},
                password : {}
            },
            async authorize (credentials) {
                const {email, password} = credentials;
                if(!email || !password) {
                    return
                }
                const db = await connectDB()
                const userCollection = db.collection('users')
                const currentUser = await userCollection.findOne({email : email});
                if(!currentUser){
                    return
                }

                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if(!passwordMatched){
                    return
                }
                return currentUser
            }
        })
    ],    
    callbacks: {},
    pages : {
        signIn : '/login'
    }
})

export { handler as GET, handler as POST };

