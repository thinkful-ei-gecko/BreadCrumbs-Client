import TokenService from '../services/token-service'
import config from '../config'

const ArticlesApiService = {

  getArticlesList() {
    return fetch(`${config.API_ENDPOINT}/article/popular`, {
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
  getSavedArticlesList() {
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

  postSavedArticle(author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id) {
    return fetch(`${config.API_ENDPOINT}/article`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        author,content,description,downvote_count,id,title,upvote_count,url,url_to_image,user_id
      }),
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