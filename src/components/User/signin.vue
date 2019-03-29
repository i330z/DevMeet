<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-title primary-title class="justify-center">
                        <div>
                            <h2>Sign In DevMeet</h2>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignin">
                                <v-layout>
                                    <v-flex xs12>
                                        <v-text-field name="email" type="email" id="email" label="Email" v-model="email"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12>
                                        <v-text-field name="password" type="password" id="password" label="Password" v-model="password"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-spacer></v-spacer>
                                    <v-flex>
                                        <v-btn type="submit" color="success">SignIn</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            email : '',
            password : ''
        }

    },

    computed :{
        user (){
            return this.$store.getters.user
        }
    },

    watch : {
        user (value) {
            if(value !==null && value !== undefined){
                this.$router.push('/')
            }
        }
    },

    methods :{
        onSignin() {
            
            this.$store.dispatch('signUserIn',{email : this.email, password : this.password})
        }
    }
}
</script>
