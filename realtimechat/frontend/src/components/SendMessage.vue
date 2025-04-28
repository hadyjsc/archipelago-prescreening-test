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

export default {
    name: 'SendMessage',
    props: {},
    emits: ['sent', 'typing'],
    methods: {
        sendMessage() {
            if (this.message.trim() === '') return;
            this.$emit('sent', this.message);
            this.message = '';
        },
        typingMessage() {
            if (this.message.trim() !== '') {
                this.$emit('typing');
            }
        },
        clearMessage() {
            this.message = '';
        },
        handleOnEnter(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                this.sendMessage();
            }
        },
    },
    data() {
        return {
            message: '',
        };
    },
    mounted() {
        window.addEventListener('keydown', this.handleOnEnter);
        window.addEventListener('click', this.clearMessage);
        window.addEventListener('click', this.sendMessage);
        window.addEventListener('keydown', this.typingMessage);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleOnEnter);
        window.removeEventListener('click', this.clearMessage);
        window.removeEventListener('click', this.sendMessage);
        window.removeEventListener('keydown', this.typingMessage);
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