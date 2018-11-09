import simpleOauth from 'simple-oauth2'


/* process.env.URL from netlify BUILD environment variables */
const siteUrl = process.env.URL || 'http://localhost:3000'

export const config = {

  /* Intercom oauth API endpoints */
  tokenHost: intercomApi,
  authorizePath: `${intercomApi}/oauth`,
  tokenPath: `${intercomApi}/auth/eagle/token`,
  profilePath: `${intercomApi}/me/`,
  /* redirect_uri is the callback url after successful signin */
  redirect_uri: `${siteUrl}/.netlify/functions/auth-callback`,
}

function authInstance(credentials) {
  if (!credentials.client.id) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set INTERCOM_CLIENT_ID')
  }
  if (!credentials.client.secret) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set INTERCOM_CLIENT_SECRET')
  }
  // return oauth instance
  return simpleOauth.create(credentials)
}

/* Create oauth2 instance to use in our two functions */
export default authInstance({
  client: {
    id: config.clientId,
    secret: config.clientSecret
  },
  auth: {
    tokenHost: config.tokenHost,
    tokenPath: config.tokenPath,
    authorizePath: config.authorizePath
  }
})