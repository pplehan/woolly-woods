<script setup>
import Layout from '@/components/Layout.vue';
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { productApi } from '@/api/module/product'
import { onMounted } from 'vue';
import { setToCart, getCart } from '@/utils/localStorage'
import { message } from 'ant-design-vue';
import router from '@/router';

const productList = ref ([])

const getProductData = async() => {
  const { data } = await productApi.getProduct();
  productList.value = data
  console.log(data);
}

const addToCart = (item) => {
  let cart = getCart() || []
  if (!cart.length) {
    cart.push(item)
    setToCart(cart)
    message.success('成功加入購物車')
    return
  }
  const isProductExist = cart.some(product => product.id === item.id )
  if (isProductExist) {
    const products = cart.map(product => {
      if (product.id === item.id) {
        product = item
        return product
      }
        return product
    })
    setToCart(products)
  } else {
    const products = [...cart, item]
    setToCart(products)
  }
   message.success('成功加入購物車')
}

onMounted(() => getProductData());

</script>

<template>
  <Layout>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
      <a-card
        v-for="item in productList"
        :key="item.id"
        class="mb-10"
      >
        <template #cover>
          <img alt="example" :src="item.image" class="product-image w-full h-60 object-cover" />
        </template>
        <a-card-meta :title="item.title">
          <template #description>{{ item.desc }}</template>
            </a-card-meta>
          <p class="mt-2 text-lg font-bold">NT${{ item.price }}</p>
            <div class="flex items-center justify-between mt-4">
              <div>
            <a-input-number v-model:value="item.amount" />
      </div>

    <a-button class="w-2/5 bg-red-800 text-white" type="primary" @click="addToCart(item)"
      size="middle" style="background-color: #8B0000;"
      >加入購物車
    </a-button>
  </div>
</a-card>
    </div>
  </Layout>
</template>

<style scoped>
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
</style>
