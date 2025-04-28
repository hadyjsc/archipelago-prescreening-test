<template>
    <v-container>
        <div class="pa-4 text-center">
            <v-dialog v-model="propDialog" max-width="600" :persistent="true">
                <v-card prepend-icon="mdi-account" title="User Register">
                    <v-card-text>
                        <v-row dense>
                            <v-col cols="12" md="12" sm="12">
                                <v-text-field 
                                    label="Username" 
                                    v-model="propUname" 
                                    required>
                                </v-text-field>
                                <v-alert 
                                    v-if="errorMessage" 
                                    type="error" 
                                    dense 
                                    class="mt-1">
                                    {{ errorMessage }}
                                </v-alert>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text="Save" variant="tonal" @click="saveUser"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>
<script lang="ts">
import { USER_KEY } from '@/commons/const';

export default {
    name: 'Register',
    props: {
        dialog: {
            type: Boolean,
            default: true
        },
        username: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            propDialog: this.dialog,
            propUname: this.username,
            errorMessage: ''
        }
    },
    watch: {
        dialog(newVal) {
            this.propDialog = newVal 
        },
        username(newVal) {
            this.propUname = newVal
        }
    },
    methods: {
        openDialog() {
            this.propDialog = true
        },
        closeDialog() {
            this.propDialog = false
        },
        saveUser() {
            const username = this.propUname
            if (!username) {
                this.errorMessage = 'Username is required'
            } else if (username.length > 10) {
                this.errorMessage = 'Username must not exceed 10 characters' 
            } else {
                localStorage.setItem(USER_KEY, username)
                this.closeDialog()
                location.reload()
                this.errorMessage = ''
            }
        }
    },
    mounted() {
        window.addEventListener('click', this.saveUser)
    },
    beforeUnmount() {
        window.removeEventListener('click', this.saveUser)
    },
    
}
</script>