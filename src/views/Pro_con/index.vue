<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Layout from '@/components/Layout.vue';

const route = useRoute();
const productId = route.params.id; // 獲取路由參數
const product = ref(null);
const quantity = ref(1); // 用來存儲數量

// 假設你有一個靜態產品數據，這裡是七個產品的數據
const products = [
  {
    id: 1,
    title: "Woolly-Woods手作烤布丁",
    image: "https://www.mashup.com.tw/bakery/product/bimg/pro2_20181012171225.jpg",
    description: "選用新鮮羊奶和天然食材，口感滑順，香甜可口。每一口都是無與倫比的美味，絕對是甜點愛好者的心頭好，讓你沉醉於其獨特風味之中。",
    price: 75,
  },
  {
    id: 2,
    title: "Woolly-Woods羊乳片",
    image: "https://www.cng.com.tw/archive/image/chocolate_pic08.jpg",
    description: "採用新鮮羊奶精製而成，口感香濃、酥脆，健康美味。富含營養，適合作為日常零食，讓每一口都帶來自然的甘甜與滿足感，絕對令人難以抗拒。",
    price: 75,
  },
  {
    id: 3,
    title: "Woolly-Woods原味羊奶",
    image: "https://www.goat.org.tw/upload/news/c80c67bd.jpg",
    description: "來自健康羊群，經過精心處理，保留天然風味。每一口都充滿濃郁奶香，富含營養，適合各種飲食需求，是家庭餐桌上的理想選擇。",
    price: 75,
  },
  {
    id: 4,
    title: "Woolly-Woods牧場冰淇淋",
    image: "https://ezgo.ardswc.gov.tw/ViewAgriSouvenir.35449/2021030107.jpg",
    description: "選用新鮮天然原料，口感絲滑細膩，帶來濃郁的奶香與香甜。無論是炎炎夏日或家庭聚會，都是享受美味的絕佳選擇，讓每一口都充滿幸福感。",
    price: 75,
  },
  {
    id: 5,
    title: "Woolly-Woods羊乳香浴乳",
    image: "https://www.honno.com.tw/archive/image//ph_hibiscus.jpg",
    description: "富含天然羊乳成分，能有效滋潤肌膚。輕柔的泡沫包覆全身，散發淡雅香氣，讓沐浴時光倍感舒適與放鬆，適合日常使用，呵護每一寸肌膚。",
    price: 75,
  },
  {
    id: 6,
    title: "Woolly-Woods羊奶優格",
    image: "https://static.owlting.com/market/public/items/thumbs/640x480/item_20631_ajcsKoOQvgefmOWGkgQ5VXTPIOgtCDnT4qpvSEVv",
    description: "採用新鮮羊奶製作，口感滑順，香醇可口。富含益生菌和營養素，幫助消化，增強免疫力。健康美味，適合全家人享用，帶來美好的早餐選擇。",
    price: 75,
  },
  {
    id: 7,
    title: "Woolly-Woods羊奶香皂",
    image: "https://www.cng.com.tw/archive/image/product1/images/_MG_8733_630_486.png",
    description: "富含天然羊奶，溫和不刺激，深層滋潤肌膚。添加精油，散發淡雅香氣，清潔同時呵護肌膚，適合各類型肌膚使用，讓你擁有柔嫩光滑的觸感。",
    price: 75,
  }
];

// 獲取產品數據
const fetchProductData = () => {
  product.value = products.find(p => p.id === Number(productId));
};

onMounted(() => {
  fetchProductData();
});

const selectedQuantity = ref(1); // 初始化數量

const addToCart = (item) => {
  console.log("產品資料:", item);  // 打印產品資料
  console.log("購買數量:", selectedQuantity.value);  // 打印購買數量
};


</script>

<template>
  <Layout>
    <div v-if="product" class="content">
      <a-row>
        <a-col class="flex justify-center" :span="12">
          <img class="w-3/5 h-96" :src="product.image" alt="img">
        </a-col>
        <a-col :span="12">
          <a-card :title="product.title" class="custom-card" style="width: 500px; border: none; box-shadow: none">
            <p class="text-xl leading-7">{{ product.description }}</p>
            <p class="mt-5 text-base font-bold">全店，冷藏品消費滿2500元免運費</p>
            <p class="mt-5 text-2xl font-bold">NT${{ product.price }}</p>
           <a-input-number v-model="selectedQuantity" size="large" :min="1" :max="100000" />
            <div class="mt-5">
              <a-button type="primary"  @click="addToCart(item)"   class="w-5/12 mr-10 bg-red-800 text-white" size="large" style="background-color: #8B0000 !important; border: none !important; box-shadow: none !important;" onmouseover="this.style.backgroundColor='#FFC0CB'" onmouseout="this.style.backgroundColor='#8B0000'">
                加入購物車
              </a-button>
              <a-button type="primary" class="w-5/12 bg-red-800 text-white" size="large" style="background-color: #8B0000 !important; border: none !important; box-shadow: none !important;" onmouseover="this.style.backgroundColor='#FFC0CB'" onmouseout="this.style.backgroundColor='#8B0000'">
                立即購買
              </a-button>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </Layout>
</template>

<style>
.custom-card .ant-card-head-title {
  font-size: 1.5rem; /* 調整標題的大小 */
}
.content {
  margin-bottom: -40px;
}
</style>
