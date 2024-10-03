export const setToken = (accessToken) => {
  localStorage.setItem('Blog-TOKEN', accessToken)
}

export const getToken = () => {
  return localStorage.getItem('Blog-TOKEN') || ''
}






export const setLang = (lang) => {
  localStorage.setItem('Woolly-Lang', lang)
}

export const getLang = () => {
  return localStorage.getItem('Woolly-Lang') || ''
}