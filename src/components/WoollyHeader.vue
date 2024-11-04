<script setup>
import { ref } from 'vue';
import { ShoppingCartOutlined } from '@ant-design/icons-vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
import { UserOutlined } from '@ant-design/icons-vue';
import logo from '@/assets/images/logo.png';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { setLang } from '@/utils/localStorage';

  const { t, locale } = useI18n()
  const changeLanguage = (lang) => {
    locale.value = lang
  }

  const translateButton = ref([
    {
      key: 'zh-TW',
      title: '繁體中文'
    },
    {
      key: 'en-US',
      title: 'English'
    }
  ])

const router = useRouter();
const changePage = (page) => {
  router.push(page);  // 跳转到页面
};



</script>
<template>
<div class="flex items-center h-36 justify-center container mx-auto ">
    <div class="w-64 cursor-pointer" @click="changePage('/')">
      <img :src="logo" alt="Logo"  />
    </div>
 <ul class="flex w-4/6 justify-around">
  <li class="cursor-pointer" @click="changePage('/about')">{{ t("about Woolly-Woods") }}</li>
  <li>
    <a-dropdown trigger="hover">
      <a class="no-border">{{ t("Park Information") }}</a> <!-- 園區資訊按鈕 -->
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a class="cursor-pointer" @click="changePage('/ticket')">{{ t('Ticket Information')}}</a>
          </a-menu-item>
          <a-menu-item>
            <a class="cursor-pointer" @click="changePage('/map')">{{ t('Park Guide')}}</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </li>
  <li class="cursor-pointer" @click="changePage('/product')">{{ t( 'Signature Products')
  }}</li>
</ul>
<div class=" flex items-center h-36 w-40  justify-between mb-2">
  <span  class="text-2xl cursor-pointer" @click="changePage('/cart')"><ShoppingCartOutlined /></span>
   <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
  <span class="text-2xl cursor-pointer"><GlobalOutlined /></span>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="item in translateButton" :key="item.key">
          <a-button block @click="changeLanguage(item.key)">{{ item.title }}</a-button>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
   <span class="text-2xl cursor-pointer" @click="changePage('/login')"><UserOutlined/></span>
  </div>
  </div>
  

</template>

<style scoped>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.no-border {
  border: none;
  padding: 0;
  background: none;
  color: #000;
  cursor: pointer;
  font-size: 16px;
}
</style>