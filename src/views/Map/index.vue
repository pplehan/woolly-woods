<script setup>
import Layout from '@/components/Layout.vue'
import Map from '@/assets/images/map.png';
</script>

<template>
<layout>
  <div class="text-center text-2xl">園區資訊</div>
   <div class="text-center text-2xl">INFORMATION</div>
   <div class="text-left mt-10 ml-4 text-2xl">園區導覽</div>
<div class=" mt-10 flex justify-center">
<img class="img_sheep" src="https://www.tabirai.net/sightseeing/column/img/0002109/kiji1Img.jpg" alt="img" >
</div>
<div class="flex justify-center">
  <div class="w-full max-w-screen-lg">
    <div class="mt-20 bg-gray-200 p-5">
      <a-row :gutter="20">
        <a-col :span="18">
          <a-card title="園區導覽地圖" :bordered="false">
            <div class="flex justify-center items-center w-full h-96">
              <img class="w-full h-full object-contain" :src="Map" alt="map">
            </div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card :bordered="false">
            <p>
              A 露營區 <br>
              B 兔寶寶的家 <br>
              C 黑山羊生態區 <br>
              D 安全戲水區 <br>
              E 庭園木屋 <br>
              F 綿羊生態區 <br>
              G 草原活動區 <br>
              H 觀景坪 <br>
              I 深水區 <br>
              J 牧場原墅 <br>
            </p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</div>

</layout>
</template>

<style scoped>
.img_sheep{
  width: 960px;
  height: 400px;
}

.img_map {
  width: 100%; /* 确保图片宽度跟随容器大小 */
  height: 360px; /* 保持图片比例 */
}
</style>
