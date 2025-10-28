<template>


</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ElNotification } from 'element-plus';

const openNotification = () => {
  ElNotification({
    title: 'Política de Cookies',
    message: 'Gostaríamos de informar que este site não coleta nem utiliza cookies para rastrear suas atividades. ',
    type: 'success',
    duration: 10000,
    position: 'bottom-right',
    });
};

onMounted(() => {
  openNotification();
});
</script>