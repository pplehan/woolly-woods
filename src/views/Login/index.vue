<script setup>
import Layout from '@/components/Layout.vue'
import { reactive, onMounted, ref } from 'vue'
import { userApi } from '@/api/module/user'
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router'
import { setToken, getToken } from '@/utils/localStorage'

const formData = reactive({
  username: '',
  password: ''
})
// username: 'emilys',
// password: 'emilyspass',

const router = useRouter()
const goToHome = () => {
  router.push('/')
}
const token = ref(getToken())

const login = async (e) => {
  e.preventDefault();
  try {
    const { data, code } = await userApi.login(formData.username, formData.password);
    console.log(data);
    if (code === 200) {
      const { accessToken } = data;
      // 保存 token
      setToken(accessToken);
      message.success('登入成功');
      // 登入成功後導向首頁
      goToHome();
    } 
  } catch (err) {
    console.error(err);
    message.error('使用者名稱或密碼錯誤');
  }
};


onMounted(()=>{
  if (token.value){ //登入狀態
    goToHome()//強制導到首頁
  }
})

</script>


<template>
<layout>
<form @submit="login" class="flex flex-col items-center my-[100px] w-[400px] mx-auto">
  <div class="flex mb-4">
    <label class="w-[100px] block text-left mr-2" for="username">使用者名稱</label>
    <!-- 綁定 username: v-model="formData.username" -->
    <input v-model="formData.username" type="text"  id="username"
      class="px-2 py-1 w-56 rounded bg-gray-100 focus:outline-0" />
  </div>
  <div class="flex mb-4">
    <label class="w-[100px] block text-left mr-2" for="password">密碼</label>
    <!-- 綁定 password: v-model="formData.password" -->
    <input v-model="formData.password" type="password"  id="password"
      class="px-2 py-1 w-56 rounded bg-gray-100 focus:outline-0" />
  </div>
 <button
  class="px-5 py-1 bg-red-800 rounded text-white disabled:bg-gray-200 cursor-pointer active:bg-pink-300" 
  type="submit" :disabled="!formData.username || !formData.password">登入
</button>
</form>
</layout>
</template>
<style scoped>
h1{
  margin-top: -32px;
}
</style>
