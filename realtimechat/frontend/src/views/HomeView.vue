<template>
    <Register v-if="!isExist"/>
    <ChatBox v-else/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ChatBox from '@/components/ChatBox.vue';
import Register from '@/components/Register.vue';
import { USER_KEY } from '@/commons/const';

const isExist = ref(false)

onMounted(() => {
    if (!localStorage.getItem(USER_KEY)) {
        isExist.value = false
    } else {
        isExist.value = true
    }
});
</script>

<style scoped>

</style>
