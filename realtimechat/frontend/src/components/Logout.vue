<template>
    <v-icon class="" :icon="'mdi-logout'" @click="logout" />
</template>
<script lang="ts">
import { USER_KEY } from '@/commons/const'
import router from '@/router';

 export default {
    name: 'Logout',
    methods: {
        logout() {
            localStorage.removeItem(USER_KEY)
            router.push('/')
        }
    },
    mounted() {
        window.addEventListener('click', this.logout)
    },
    beforeUnmount() {
        window.removeEventListener('click', this.logout)
    }
}
</script>