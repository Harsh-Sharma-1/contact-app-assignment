import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId:
                '771188756312-r3jf97u1a0inndb0hbc9ltem5nclvtpm.apps.googleusercontent.com',
            clientSecret: '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',
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
