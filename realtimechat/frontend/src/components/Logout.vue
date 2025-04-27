<template>
    <v-icon class="" :icon="'mdi-logout'" @click="logout" />
</template>
<script lang="ts">
import { USER_KEY } from '@/commons/const'

 export default {
    name: 'Logout',
    methods: {
        logout() {
            localStorage.removeItem(USER_KEY)
            location.href = ''
        }
    }
}
</script>