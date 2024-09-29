<script setup>
import WoollyHeader from '@/components/WoollyHeader.vue'
import WoollyFooter from '@/components/WoollyFooter.vue'
</script>
<template>
<woolly-header/>
<div class='container mx-auto'>

<slot/>
</div>
<woolly-footer/>
</template>

<style scoped>

</style>
