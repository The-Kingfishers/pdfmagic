import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("profile Google: ", profile);

        let userRole = "Google User"
        if (profile?.email === "jahidhasan20u@gmail.com") {
          userRole = "Admin"
        }

        return {
          ...profile,
          id: profile.sub,
          role: userRole
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    }),
    GithubProvider({
      profile(profile) {
        console.log("profile Google: ", profile);

        let userRole = "Github User"
        if (profile?.email === "jahidhasan20u@gmail.com") {
          userRole = "Admin"
        }

        return {
          ...profile,
          role: userRole
        }

      },
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

  ],
  callbacks: {
    async jwt({token, user }) {
      if(user) token.role = user.role
      return token
    },
    async session({session, token}){
      if(session?.user) session.user.role = token.role
      return session
    }
  }
}


