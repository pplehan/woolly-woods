import { productApi } from "@/api/module/product"

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

export const setToCart = (product) => {
  localStorage.setItem('Woolly-cart', JSON.stringify(product))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('Woolly-cart')) || []
}