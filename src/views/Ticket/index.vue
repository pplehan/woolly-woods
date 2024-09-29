<script setup>
import Layout from '@/components/Layout.vue'
const tableData = [
  { item: '全　票　280元', content: '國中(含)以上' },
  { item: '團體票　260元', content: '40人(含)以上之團體' },
  { item: '學童票　220元', content: '國小一年級~六年級' },
  { item: '幼童票　160元', content: '3歲～幼稚園' },
  { item: '敬老票　160元', content: '65歲以上' },
  { item: '優惠票　140元', content: '憑本人身心障礙手冊，本人及陪同者１人可享半價優惠' },
  { item: '免費', content: '3歲以下' },
  { item: '大客車停車場地環境維護費　100元/部', content: '大客車(20人座以上)' },
  { item: '小客車停車場地環境維護費　50元/部', content: '小客車' },
];
</script>
<template>
<layout>
   <div class="text-center text-2xl">園區資訊</div>
   <div class="text-center text-2xl">INFORMATION</div>
<div class="text-left mt-10 text-2xl ml-4">門票資訊</div>
<div class="text-left ml-40 mt-10 text-xl ">開放園區時間　　07:00 ~ 19:00</div>
<div class="text-left ml-40 mt-10 text-xl ">一日遊入園票價</div>

 <div class="w-3/4 mx-auto">
   <table class="w-full table-auto mt-10 border-collapse border border-gray-400">
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index"  class="table-row-hover">
          <td class="border border-gray-300 px-4 py-2 w-4/12">{{ item.item }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ item.content }}</td>
        </tr>
      </tbody>
    </table>
</div>
<p class="text-left mt-10 text-xl ml-40 leading-10 text-red-600">
  ★以上憑門票可免費兌換乳製品乙杯。<br>
  ★停車場恕不負責保管、遺失及損壞等責任。<br>
  ★貴重物品請勿放置車內，避免損及個人利益。

</p>


</layout>
</template>
<style scoped>
  .table-row-hover:hover {
    background-color: #f0f0f0; /* Change this to your desired color */
  }
table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.text-center-custom {
    text-align: center;
  }
</style>