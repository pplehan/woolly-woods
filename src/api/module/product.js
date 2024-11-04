import server from '../server'

export const productApi = {
  getProduct: async() => {
    const data = await server.get('/product')
    return data
  }
}