import Mock from "mockjs";
import login from "./login.json"
import product from "./product.json"

Mock.mock('/mock/login', {
  code: 200,
  data: login
})
Mock.mock('/mock/product', {
  code: 200,
  data: product
})