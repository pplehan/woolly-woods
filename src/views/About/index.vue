<script setup>
import Layout from '@/components/Layout.vue'
const tableData = [
  { item: '名　　稱', content: '民國81年 毛絨絨村　　民國84年 Woolly-Woods' },
  { item: '佔　　地', content: '牧場營業面積約50公頃，經營面積（含牧草種植、綿羊養殖）約120公頃' },
  { item: '地　　形', content: '標高約180m~270m低海拔緩坡地形容' },
  { item: '地　　址', content: '946 屏東縣恆春鎮大光路123號' },
  { item: '電　　話', content: '08-8881234' },
  { item: '傳　　真', content: '08-1234-5678' },
];
</script>
<template>
<layout>
  <div>
    <!-- 標題部分 -->
    <div class="text-center text-2xl">關於Woolly-Woods</div>
    <div class="text-center text-2xl mb-4">ABOUT US</div>
    <div class="text-left mt-10 text-2xl ml-4">經營理念</div>
    
    <!-- 卡片佈局部分 -->
    <div class="flex justify-center">
      <div class="mt-10 w-full max-w-screen-lg bg-gray-200 p-5">
        <div class="flex flex-wrap -mx-4">
          <!-- 每個卡片 -->
          <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
            <a-card title="Woolly-Woods 由來" :bordered="false">
              <p class="text-lg leading-8">
                在一片寧靜的森林中，有一群毛絨絨的羊。
                它們的羊毛隨風飄動，像是森林的裝飾。
                村民們也在這裡享受平靜的生活，
                這片森林被稱為「Woolly Woods」。
              </p>
            </a-card>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
            <a-card title="顏色意象" :bordered="false">
              <p class="text-lg leading-8">
                在「Woolly Woods」，清晨的霧氣和陽光
                結合，映射出柔和的綠意和金黃。
                羊群的純白羊毛與樹葉的深綠
                營造出安靜、祥和的氛圍。
              </p>
            </a-card>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
            <a-card title="牧場使命" :bordered="false">
              <p class="text-lg leading-8">
                我們的使命是提供一個和諧的牧場環境，
                讓動物健康成長，並生產高品質的產品。
                透過可持續發展和負責任的農業，
                讓每個人都能享受自然的美好。
              </p>
            </a-card>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="text-left mt-10 text-2xl ml-4">Woolly-Woods小檔案</div>
<div class=" mt-10 w-auto flex justify-center">
<img class="w-3/5 h-96" src="https://ocacnews.net/articleImages/202207/M2_D2E5074F-A037-7D5C-B91F-3268A3012899.jpg" alt="img">
</div>
 <div class="w-3/4 mx-auto mt-10">
   <table class="w-full table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
            <th class="border border-gray-300 px-4 py-2 bg-red-700 text-slate-50">項目</th>
          <th class="border border-gray-300 px-4 py-2  bg-red-700 text-slate-50">內容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index"  class="table-row-hover">
          <td class="border border-gray-300 px-4 py-2">{{ item.item }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ item.content }}</td>
        </tr>
      </tbody>
    </table>
</div>

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
  .ant-card-body {
  padding: 16px;
}

.ant-card-title {
  font-size: 1.25rem; /* 調整標題字體大小 */
}

/* 確保圖片和卡片內容不超出範圍 */
.ant-card {
  overflow: hidden;
}

/* 自定義背景顏色及邊距 */
.bg-gray-200 {
  background-color: #f7f7f7;
}
</style>