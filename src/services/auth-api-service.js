import config from "../config";


const AuthApiService = {
  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/token`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ username, password })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
 
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
       
  },
  postChangeUsername({ user_id, username, name, password}) {
    const payload = JSON.stringify({ user_id, username, name, password })

    return fetch(`${config.API_ENDPOINT}/user/update`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: payload
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  postChangePassword({ user_id, password, new_password }) {
    const payload = JSON.stringify({ user_id, password, new_password })

    return fetch(`${config.API_ENDPOINT}/user/update/password`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: payload
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  deleteUser({ user_id }) {
    const payload = JSON.stringify({ user_id });

    return fetch(`${config.API_ENDPOINT}/user/update`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: payload
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : null
    )
  }
};

export default AuthApiService;
