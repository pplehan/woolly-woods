export const setLang = (lang) => {
  localStorage.setItem('Woolly-Lang', lang)
}

export const getLang = () => {
  return localStorage.getItem('Woolly-Lang') || ''
}