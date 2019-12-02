export default {
  API_ENDPOINT:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:8000/api'
      : 'https://breadcrumbs-ei34.herokuapp.com/api',
  TOKEN_KEY: process.env.BREAD_CRUMBS_AUTH_TOKEN || 'bread-crumbs-auth-token',
}