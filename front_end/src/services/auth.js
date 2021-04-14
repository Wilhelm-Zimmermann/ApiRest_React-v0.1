// setting the token name
export const TOKEN_KEY = "@facebook-Token"
// this function verifies if the user is logged
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
// this function get token on local storage
export const getToken = () => localStorage.getItem(TOKEN_KEY)
// this function set the token on local storage
export const login = token => {
    localStorage.setItem(TOKEN_KEY,token)
}
// this function removes the token on local storage
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    window.location.reload()
}