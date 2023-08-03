import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: '3e9d225725cc53e0f352',
            clientSecret: '9aee1215d7f91fb2cb56b680d276e091aa357d6e',
        }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
};
