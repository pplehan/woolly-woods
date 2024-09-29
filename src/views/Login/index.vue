<script setup>
import Layout from '@/components/Layout.vue'
</script>

<template>
<layout>
  <div class="my-24">
  <h1 class="text-3xl font-bold flex justify-center">登入</h1>
    <div class="w-1/5 mx-auto flex justify-center mt-10">
      <a-space  direction="vertical" size="large" class="w-full">
      <a-input-password
        v-model:value="value3"
        placeholder="請輸入手機號碼"
        :visibility-toggle="false" size="large"
        class="w-full"
      />
      <a-input-password v-model:value="value" placeholder="請輸入密碼" size="large" class="w-full" />
    <a-button class="w-full bg-red-800 text-white" type="primary" size="large" style="background-color: #8B0000 !important; border: none !important; box-shadow: none !important;" onmouseover="this.style.backgroundColor='#FFC0CB'" onmouseout="this.style.backgroundColor='#8B0000'">開始購物吧!
    </a-button>


      </a-space>
    </div>
    </div>
</layout>
</template>

<style scoped>
h1{
  margin-top: -32px;
}


</style>
