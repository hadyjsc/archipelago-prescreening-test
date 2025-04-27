<template>
    <v-row>
        <v-col cols="12" lg="12" md="12">
            <v-card>
                <v-card-title class="text-h5 d-flex justify-space-between align-center"
                    style="border-bottom: 2px #eee solid;">
                    <span>General Room</span>
                    <div>
                        <Logout></Logout>
                    </div>
                </v-card-title>
                <v-card-text class="card-text" ref="chatContainer">
                    <v-list>
                        <v-list-item-group>
                            <v-list-item v-for="(message, index) in messages" :key="index">
                                <v-list-item-content
                                    v-bind:class="(message.sender == userId) ? 'float-right' : 'float-left'">
                                    <Card :message="message.message" :created-at="message.createdAt"
                                        :sender="message.sender" :user-id="userId"> </Card>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    <div v-if="isTyping" class="font-italic text-subtitle-2 ma-2 ml-4">
                        Someone is typing...
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row style="bottom: 0px;">
        <v-col cols="12" lg="12" md="12">
            <SendMessage @sent="handleOnMessage" @typing="handleOnTyping"></SendMessage>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { io } from 'socket.io-client';
import SendMessage from '@/components/SendMessage.vue';
import Card from './Card.vue';
import { SOCKET_PATH_RECEIVED, SOCKET_PATH_REGISTER, SOCKET_PATH_SENT, SOCKET_PATH_TYPING, USER_KEY } from '@/commons/const';
import Logout from './Logout.vue';
import { nextTick } from 'vue';

export default {
    name: 'ChatBox',
    components: {
        SendMessage,
        Card,
        Logout
    },
    data() {
        return {
            messages: [] as Array<{ message: string; sender: string; createdAt?: string }>,
            userId: '',
            socket: io('http://localhost:9000'),
            chatContainer: null as HTMLElement | null,
            isScrolledToBottom: true,
            isTyping: false 
        };
    },
    methods: {
        registerUser(id: string) {
            this.userId = id;
            this.socket.emit(SOCKET_PATH_REGISTER, id);
        },
        sendMessage(payload: { message: string; sender: string }) {
            this.socket.emit(SOCKET_PATH_SENT, payload);
        },
        handleOnMessage(message: string) {
            const payload = {
                message: message,
                sender: this.userId
            };
            this.sendMessage(payload);
        },
        handleOnTyping() {
            this.socket.emit(SOCKET_PATH_TYPING, { sender: this.userId });
        },
        scrollToBottom() {
            const container = (this.$refs.chatContainer as any)?.$el as HTMLElement;
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        },
        handleScroll() {
            const container = (this.$refs.chatContainer as any)?.$el as HTMLElement;
            if (container) {
                this.isScrolledToBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10;
            }
        }
    },
    async mounted() {
        const user = localStorage.getItem(USER_KEY)
        this.userId = user ? user : ''
        if (!this.userId) { return; }

        this.registerUser(this.userId);
        await nextTick();
        this.scrollToBottom();

        this.socket.on(SOCKET_PATH_RECEIVED, async (message: any) => {
            this.messages.push(message);
            this.isTyping = false; 
            await nextTick();
            setTimeout(() => {
                if (this.isScrolledToBottom) {
                    this.scrollToBottom();
                }
            }, 50);
        });

        this.socket.on(SOCKET_PATH_TYPING, (data: any) => {
            if (data.sender !== this.userId) {
                this.isTyping = true;
                setTimeout(() => {
                    this.isTyping = false;
                }, 2000);
            }
        });
    },
    beforeUnmount() {
        const container = (this.$refs.chatContainer as any)?.$el as HTMLElement;
        if (container) {
            container.removeEventListener('scroll', this.handleScroll);
        }
    }
};
</script>

<style scoped>
.card-text {
    height: 500px;
    font-size: 16px;
    color: #333;
    overflow-y: scroll;
    scroll-behavior: smooth;
}
</style>