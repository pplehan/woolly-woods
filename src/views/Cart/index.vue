<script setup>
import Layout from '@/components/Layout.vue'
import { ref } from 'vue';


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

const tableData = ref([
  {
    product: '牛奶',
    price: 100,
    amount: 1,
  },
  {
    product: '優酪乳',
    price: 100,
    amount: 1,
  },
])




</script>

<template>
<layout>
 <a-steps
    :current="1"
    :items="[
      {
        title: '購物車',
        description,
      },
      {
        title: '填寫資料',
        description,
      },
      {
        title: '訂單確認',
        description,
      },
    ]"
  ></a-steps>
  <h1 class="text-xl mt-10 mb-5">購物車內容</h1>
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
      <a-button type="primary" danger ghost @click="removeItem(record.key)">移除</a-button>
    </template>
  </template>
</a-table>
  <a-row>
    <a-col :span="12">
    <div class="my-20">
      <h1 class="text-xl">選擇配送及付款方式</h1>
      <div class="mt-10">
      <select id="shipping-method" v-model="selectedShipping" class="border rounded p-2">
        <option disabled value="">請選擇配送方式</option>
        <option value="standard">黑貓宅配(貨到付款)</option>
        <option value="express">全家(取貨付款)</option>
        <option value="pickup">7-11(取貨付款)</option>
        <option value="pickup">黑貓宅配(信用卡 / LINE Pay / Apple Pay / 街口 / ATM 轉帳付款)</option>
        <option value="pickup">全家(信用卡 / LINE Pay / Apple Pay / 街口 / ATM 轉帳付款)</option>
        <option value="pickup">7-11(信用卡 / LINE Pay / Apple Pay / 街口 / ATM 轉帳付款)</option>
      </select>
    </div>
    </div>
    </a-col>
    <a-col :span="12">
    <div class="mt-40 flex justify-center">
        <a-button class="mr-10 w-auto" type="primary">前往結帳</a-button>
        <a-button type="primary">回購物車</a-button>

    </div>
    </a-col>
  </a-row>



</layout>
</template>