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
  <a-result class="content" status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
    <a-button type="primary" @click="changePage('/')">Back Home</a-button>
    </template>
  </a-result>
</layout>
</template>

<style>
.content {
  margin: -80px 0 -120px;
}

</style>