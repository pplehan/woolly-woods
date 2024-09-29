<script setup>
import logo from '@/assets/images/logo.png';
import { FacebookFilled } from '@ant-design/icons-vue';
</script>
<template>
 <div class="flex items-center h-36 justify-center container mx-auto mt-20">
  <div class="w-96">
    <img :src= "logo" alt="Logo" />
  </div>
<ul class="flex w-4/6 justify-around">
  <li class="leading-8">
      地址 | 946 屏東縣恆春鎮大光路123號<br>
      電話 | 08-8881234 <br>
      傳真 | <u>08-1234-5678</u> <br>
  </li>
  <li class="leading-8" >
      營業時間 | 09:00 ~ 18:00 <br>
      營業公司：絨絨林休閒農場股份有限公司<br>
      <u>192038754</u>
  </li>
</ul>
</div>
</template>
<style scoped></style>