export default {
  API_ENDPOINT:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/api'
      : 'ENTER LIVE ZEIT URL HERE',
  TOKEN_KEY: process.env.BREAD_CRUMBS_AUTH_TOKEN || 'bread-crumbs-auth-token',
}