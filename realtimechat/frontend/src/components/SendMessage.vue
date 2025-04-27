<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="message" clear-icon="mdi-close-circle" label="Message" type="text"
                    variant="filled" clearable @click:clear="clearMessage" @input="typingMessage">
                    <template v-slot:append>
                        <v-icon class="custom-append-icon" :icon="'mdi-send'" @click="sendMessage" />
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    name: 'SendMessage',
    props: {},
    emits: ['sent', 'typing'],
    setup(_, { emit }) {
        const message = ref('');

        const sendMessage = () => {
            if (message.value.trim() === '') return;
            emit('sent', message.value);
            message.value = '';
        };

        const typingMessage = () => {
            if (message.value.trim() !== '') {
                emit('typing');
            }
        };

        const clearMessage = () => {
            message.value = '';
        };

        return { message, sendMessage, clearMessage, typingMessage };
    },
}
</script>

<style scoped>
.custom-append-icon {
    background-color: #ff0000;
    color: white;
    border-radius: 50%;
    padding: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.custom-append-icon:hover {
    background-color: #980707;
}
</style>