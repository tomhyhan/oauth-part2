import GoogleProvider from "next-auth/providers/google"

const is_valid = (key: string, default_env =  undefined) => { 
    const env_val = process.env[key] || default_env
    if (env_val == null) {
        throw new Error(`Environment variable - ${key} is not set`)
    }
    return env_val
}

const config = {
    OAUTH_CLIENT: is_valid('OAUTH_CLIENT'),
    OAUTH_SECRET: is_valid('OAUTH_SECRET'),
}
// http://localhost:3000/api/auth/callback/google
export const authOptions = {
    providers: [
        GoogleProvider({
        clientId: config.OAUTH_CLIENT,
        clientSecret: config.OAUTH_SECRET,
      }),
    ],
  }