export default {
  API_ENDPOINT: (process.env.NODE_ENV === 'production' 
    ? 'API will go here' : 'http://localhost:8000/api'),
  TOKEN_KEY: process.env.TOKEN_KEY || 'bread-crumbs-client-auth-token',
}