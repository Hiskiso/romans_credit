function getAuth() {
    let authToken = localStorage.getItem('auth') 
    authToken = null
   return authToken || null
}

export default getAuth