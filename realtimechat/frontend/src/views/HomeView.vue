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
        console.log('User does not exist in local storage');
    } else {
        isExist.value = true
        console.log('User already exists in local storage:', localStorage.getItem(USER_KEY));
    }

    console.log('isExist:', isExist.value);
});
</script>

<style scoped>

</style>
