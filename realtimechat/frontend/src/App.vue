<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <v-container class="">
        <v-row>
            <v-col cols="12" md="12" lg="12">
                <v-sheet class="mt-10" color="">
                    <v-sheet :rounded="true" class="" height="700" width="100%">
                        <RouterView />
                    </v-sheet>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
</style>
