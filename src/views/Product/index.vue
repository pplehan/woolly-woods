<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Layout from '@/components/Layout.vue';

const productList = ref([
  {
    id: 1,
    title: "Woolly-Woods手作烤布丁",
    image: "https://www.mashup.com.tw/bakery/product/bimg/pro2_20181012171225.jpg",
    desc: "售價45元"
  },
  {
    id: 2,
    title: "Woolly-Woods羊乳片",
    image: "https://www.cng.com.tw/archive/image/chocolate_pic08.jpg",
    desc: "售價120元"
  },
  {
    id: 3,
    title: "Woolly-Woods原味羊奶",
    image: "https://www.goat.org.tw/upload/news/c80c67bd.jpg",
    desc: "售價100元"
  },
  {
    id: 4,
    title: "Woolly-Woods牧場冰淇淋",
    image: "https://ezgo.ardswc.gov.tw/ViewAgriSouvenir.35449/2021030107.jpg",
    desc: "售價45元"
  },
  {
    id: 5,
    title: "Woolly-Woods羊乳香浴乳",
    image: "https://www.honno.com.tw/archive/image//ph_hibiscus.jpg",
    desc: "售價75元"
  },
  {
    id: 6,
    title: "Woolly-Woods羊奶優格",
    image: "https://static.owlting.com/market/public/items/thumbs/640x480/item_20631_ajcsKoOQvgefmOWGkgQ5VXTPIOgtCDnT4qpvSEVv",
    desc: "售價50元"
  },
  {
    id: 7,
    title: "Woolly-Woods羊奶香皂",
    image: "https://www.cng.com.tw/archive/image/product1/images/_MG_8733_630_486.png",
    desc: "售價40元"
  }
]);

const router = useRouter();

const goToProductDetail = (id) => {
  router.push({ name: 'productDetail', params: { id } });
};
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
        <a-button class="w-2/5 mt-5 bg-red-800 text-white" type="primary"
          size="middle" style="background-color: #8B0000 !important; border: none !important; box-shadow: none !important;" onmouseover="this.style.backgroundColor='#FFC0CB'" onmouseout="this.style.backgroundColor='#8B0000'"
          @click="goToProductDetail(item.id)">
          我要購買
        </a-button>
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
