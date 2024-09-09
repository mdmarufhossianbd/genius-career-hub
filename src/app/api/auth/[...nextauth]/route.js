import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import nextAuth from "next-auth";

import CredentialProvider from 'next-auth/providers/credentials';

export const authOptions = {
    session: {
        strategy : 'jwt',
        maxAge : 1 * 24 * 60 * 60
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
    callbacks: {
        async jwt({token, user})  {
            if(user){
                token.role = user.userType
            }
            return token
        },
        async session({session, token}) {
            if(token){
                session.user.role = token.role
            }
            return session
        }
    },
    pages : {
        signIn : '/login'
    }
}
const handler = nextAuth(authOptions)

export { handler as GET, handler as POST };

