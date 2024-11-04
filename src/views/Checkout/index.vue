<script setup>
import Layout from '@/components/Layout.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const changePage = (page) => {
  router.push(page);  // 跳转到页面
};
</script>

<template>
<layout>
<a-result
    status="success"
    title="訂購完成"
    sub-title="訂單編號: 2017182818828182881"> 
    <template #extra>
      <a-button @click="changePage('/')" key="console" type="primary" style="background-color: #8B0000">回首頁</a-button>
    </template>
  </a-result>
</layout>
</template>

<style>


</style>