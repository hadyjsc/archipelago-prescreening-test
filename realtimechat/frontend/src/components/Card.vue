<template>
    <v-row>
        <v-col cols="12" lg="12" md="12">
            <v-card :loading="false" style="width: fit-content;" class="ma-1" variant="elevated" :elevation="3" v-bind:color="(sender == userId) ? 'green lighten-3' : 'white'">
                <v-card-text class="pa-2 d-flex" v-bind:class="(sender == userId) ? 'flex-row flex-row-reverse ga-2' : 'flex-row'">
                    <v-avatar size="40" class="mr-2" v-bind:color="(sender == userId) ? 'white' : 'grey'">
                        <span class="white--text font-weight-bold">{{ sender.charAt(0).toUpperCase() }}</span>
                    </v-avatar>
                    <div class="">
                        <div>
                            <strong class="font-weight-normal">{{ sender }}</strong> <span class=" text-caption">{{ createdAt }}</span>
                        </div>
                        <div class="text-body-1">{{ message }}</div>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script lang="ts">
export default {
    name: 'Card',
    props: {
        message: {
            type: String,
            default: ''
        },
        sender: {
            type: String,
            default: ''
        },
        createdAt: {
            type: String,
            default: ''
        },
        userId: {
            type: String,
            default: ''
        }
    }
}
</script>