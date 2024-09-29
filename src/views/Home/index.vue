<script setup>
import Layout from '@/components/Layout.vue'
import { Carousel as ACarousel } from 'ant-design-vue';
import { ref } from 'vue';

const onChange = (current) => {
  console.log('当前页码:', current);
};



</script>
<template> 
<layout>
 <div class="w-full mx-auto">
    <a-carousel :autoplay="true" dots>
      <div class="carousel-slide">
        <img class="carousel-image" src="https://2bunny.tw/wp-content/uploads/2020/11/001.jpg" alt="Image 1" />
      </div>
      <div class="carousel-slide">
        <img class="carousel-image" src=https://www.tiffany0118.com/wp-content/uploads/2023/06/%E8%A6%AA%E6%B0%B4%E7%AF%80-161008.jpg alt="Image 2" />
      </div>
      <div class="carousel-slide">
        <img class="carousel-image" src="https://myjourney.tw/wp-content/uploads/%E7%A6%BE%E5%85%89%E7%89%A7%E5%A0%B4_6.jpg" alt="Image 3" />
      </div>
      <div class="carousel-slide">
        <img class="carousel-image" src="https://www.tabirai.net/sightseeing/column/img/0002109/kiji1Img.jpg" alt="Image 4" />
      </div>
    </a-carousel>
  </div>
  <div class="text-center mt-20 text-2xl">關於Woolly-Woods</div>
  <div class="text-center text-2xl">ABOUT US</div>
   <div class="flex justify-around">
 <a-card class="mt-10 custom-card" title="羊咩咩心理治療師" style="width: 1000px">
  <p class="text-lg leading-10">
  羊咩咩是一位溫暖的心理治療師，擁有一顆柔軟的心靈，善於傾聽。她專門幫助那些感到壓力與焦慮的人們，無論是工作還是生活上的困擾，她總能提供細膩的關懷與建議。羊咩咩深信，心靈的健康與平衡來自於內在的力量，透過引導和陪伴，她幫助大家找回內心的平靜。她的咩咩聲音中透出療癒的力量，讓人感到安心與放鬆，願意敞開心扉。無論是大人還是孩子，羊咩咩的療癒技巧總是讓人感到溫暖如春。
</p>
  </a-card>
  </div>
  <div class="text-center mt-20 text-2xl">交通位置</div>
   <div class="text-center text-2xl">Transportation Location</div>
  <div class="flex justify-center ml-4">
    <a-row class="mt-10 w-full max-w-screen-lg">
       <a-col :xs="24" :sm="12" class="col-margin">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.724889777854!2d120.73701627436617!3d21.94512525567726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471b03f3ec34781%3A0x51883d507b7c2078!2zOTQ25bGP5p2x57ij5oGG5pil6Y6u5aSn5YWJ6LevMTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1726389017515!5m2!1szh-TW!2stw" 
          width="100%" 
          height="320" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </a-col>
      <a-col class="a_col_1" :xs="24" :sm="12">
        <a-collapse class="text-lg" v-model:activeKey="activeKey" accordion>
          <a-collapse-panel key="1" header="火車">
            <p class="leading-10">
              搭乘台灣鐵路至枋寮火車站後，前行至墾丁牌樓，搭乘“公車”往【五公寺】，於【大窟尾】下車；往Woolly-Woods方向步行87公尺即可抵達
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="公車">
            <p class="leading-10">
              出枋寮火車站後，前行至墾丁牌樓，搭乘“公車”往【五公寺】，於【大窟尾】下車；往Woolly-Woods方向步行87公尺即可抵達。
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="自行開車">
            <p class="leading-10">
              沿國道3號和國道1號前往南州鄉。從國道3號的424-南州出口下交流道。沿屏鵝公路前往目的地恆春鎮，即可抵達Woolly-Woods
            </p>
          </a-collapse-panel>
        </a-collapse>
      </a-col>
    </a-row>
  </div>

 
 
     
</layout>
</template>

<style scoped>
:deep(.slick-slide) {
  width: auto;
  text-align: center;
  height: 500px;
  line-height: 160px;
  overflow: hidden;
}
:deep(.slick-slide h3) {
  color: #fff;
}
img {
  width: 100%; /* 确保图片宽度跟随容器大小 */
  height: auto; /* 保持图片比例 */
}

.custom-card ::v-deep .ant-card-head-title {
  font-size: 20px;
}


.col-margin {
  padding: 0 12px; /* 左右内边距为 4px */
  box-sizing: border-box; /* 确保 padding 不影响总宽度 */
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px; /* You can adjust this based on your preference */
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>