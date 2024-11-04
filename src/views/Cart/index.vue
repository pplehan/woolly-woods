<script setup>
import Layout from '@/components/Layout.vue'
import { useRouter } from 'vue-router'
import { getCart, setToCart} from '@/utils/localStorage';
import { computed, ref  } from 'vue';
const cart = ref (getCart())

const tableColumns = ref([
  {
    name: '商品資料',
    key: 'product'
  },
  {
    name: '單件價格',
    key: 'price'
  },
  {
    name: '數量',
    key: 'amount'
  },
  {
    name: '小計',
    key: 'total'
  },
  {
    name: '操作',
    key: 'action'
  },
]);
const tableData = computed(() => {
  return cart.value.map(product => ({
    id: product.id,
    product: product.title,
    price: product.price,
    amount: product.amount
  }))
})
const removeFromCart = (id) => {
  const newCart = cart.value.filter(product => product.id !== id)
 setToCart(newCart)
 cart.value = newCart
}
const total = computed(() => {
  return cart.value.reduce((sum, product) => {
    return sum + product.price * product.amount;
  }, 0);
});
const selectedShipping = ref(""); 

const router = useRouter()
const checkout = () =>{
  router.push('/checkout')
}

</script>

<template>
<layout>
  <h1 class="text-lg sm:text-xl mb-4">購物車內容</h1>
<a-table :columns="tableColumns" :data-source="tableData" :pagination="false">
  <template #headerCell="{ column }">
    <span class="text-base">{{ column.name }}</span>
  </template>
  <template #bodyCell="{ column, record }">
    <template v-if="column.key === 'product'">
      {{ record.product }}
    </template>
    <template v-if="column.key === 'price'">
      {{ record.price }}
    </template>
    <template v-if="column.key === 'amount'">
      {{ record.amount }}
    </template>
    <template v-if="column.key === 'total'">
      {{ record.price * record.amount }}
    </template>
    <template v-if="column.key === 'action'">
      <a-button type="primary" danger ghost @click="removeFromCart(record.id)">移除</a-button>
    </template>
  </template>
</a-table>
<a-row>
    <a-col :span="12">
      <a-row class="h-full ml-40 justify-start">
    <h1 class="text-lg sm:text-xl mt-10 mb-4">填寫訂購資料</h1>
    <a-input class="mb-4" v-model:value="value" placeholder="請輸入取貨人姓名" />
    <a-input class="mb-4" v-model:value="value" placeholder="請輸入自家/便利商店地址" />
    <a-input v-model:value="value" placeholder="請輸入電子郵件" />
    <div class="mt-4">
    <select id="shipping-method" v-model="selectedShipping" class="border rounded p-2 w-full mt-2">
      <option value="" disabled selected>請選擇配送方式</option><!-- 設定為預設選項 -->
      <option value="pickup">黑貓宅配(取貨付款)</option>
      <option value="pickup">7-11(取貨付款)</option>
      <option value="express">全家(取貨付款)</option>
      <option value="standard">萊爾富(取貨付款)</option>
    </select>
  </div>
  </a-row>
</a-col>
    <a-col class="mt-20 ml-5" :span="8">
      <div class="shopping-cart-summary border p-4 rounded">
    <h1 class="text-lg sm:text-xl mb-12">購物車總計</h1>
    <div class="flex justify-between font-bold mb-4">
      <span>總計：</span>
      <span>{{ total }} 元</span>
    </div>
    <div class="mt-10">
      <a-button @click="checkout" type="primary" style="background-color: #8B0000">確認送出</a-button>
    </div>
  </div>
    </a-col>
  </a-row>
















</layout>
</template>
