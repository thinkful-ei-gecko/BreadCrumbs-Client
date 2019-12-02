import TokenService from '../services/token-service'
import config from '../config'

const ArticlesApiService = {

  getArticlesList() {
    return fetch(`${config.API_ENDPOINT}/article`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`, 
      },
    })
    .then(res =>  
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch(error=>{
        console.error({error})
      })
  },



  
}

export default ArticlesApiService;
