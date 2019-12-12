import TokenService from '../services/token-service'
import config from '../config'

const ArticlesApiService = {

  getArticlesList() {
    return fetch(`${config.API_ENDPOINT}/article/oven`, {
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
        console.error(error)
      })
  },
  getSavedArticlesList() {
    return fetch(`${config.API_ENDPOINT}/article/savedarticles`, {
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
  postArticle(author,content,source,description,title,url,url_to_image,publishedAt) {
    console.log('*******',author)
    return fetch(`${config.API_ENDPOINT}/article`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        author:author,
        title:title,
        description:description,
        source_name:source,
        url:url,
        url_to_image:url_to_image,
        publish_at:publishedAt,
        content:content
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


  postSavedArticle(article_id,user_id) {
    
    return fetch(`${config.API_ENDPOINT}/article/savedarticles`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_id: article_id,
        user_id:user_id,
        
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

  deleteSavedArticle(id){
    return fetch(config.API_ENDPOINT + `/article/savedarticles/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
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

  updateVote(article_id,user_id,vote_type){
    console.log(article_id,user_id,vote_type)
    return fetch(`${config.API_ENDPOINT}/vote`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_id,
        user_id,
        vote_type
      })
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : null
    
    )
    .catch(error=>{
      console.error({error})
    })
  },

  getComments(articleId) {
    return fetch(`${config.API_ENDPOINT}/comment/${articleId}/comments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
    .catch(error => console.error(error))

  },

  postComment(articleId, comment,user_id) {
    const payload = JSON.stringify(
      {
      article_id: articleId,
      comment : comment,
      user_id : user_id,
      })
    return fetch(`${config.API_ENDPOINT}/comment`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: payload
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
  
}

export default ArticlesApiService;
