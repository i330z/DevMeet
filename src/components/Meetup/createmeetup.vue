<template>
    <div>
        <v-container>
            <v-layout row>
                <v-flex xs12>
                    <h2>Create Meetups</h2>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12>
                    <form @submit.prevent="onCreateMeetup">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field name="location" label="Location" id="location" v-model="location" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field name="imageurl" label="ImageURL" id="imageUrl" v-model="imageUrl" required></v-text-field>
                            </v-flex>
                        </v-layout>
                           <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <img :src="imageUrl" height="300px">
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-textarea v-model="description" label="Description" id="description" counter maxlength="120" full-width single-line></v-textarea>
                            </v-flex>
                        </v-layout>
                        <v-layout row justify-center>
                            <v-flex xs12 sm3 >
                                <v-menu>
                                    <v-text-field :value="date" slot="activator" label="Date"></v-text-field>
                                    <v-date-picker v-model="date"></v-date-picker>
                                </v-menu>
                            </v-flex>
                            <v-flex xs12 sm3 >
                                <v-menu>
                                    <v-text-field :value="time" slot="activator" label="Time"></v-text-field>
                                    <v-time-picker v-model="time"></v-time-picker>
                                </v-menu>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-btn type="submit" :disabled = '!formIsValid'>Create Meetup</v-btn>
                            </v-flex>
                            {{date}}
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title :'',
            location : '',
            imageUrl: '',
            description : '',
            date : null,
            time: null
        }
    },
    computed:{
        formIsValid(){
            return this.title !== '' && this.location !== '' && this.imageurl !== '' && this.description !== ''
        }
    },
    methods : {
        onCreateMeetup(){
            if(!this.formIsValid){
                return
            }
            
            const meetupData = {
                title : this.title,
                location : this.location,
                imageUrl : this.imageUrl,
                description : this.description,
                date : this.date,
                time : this.time
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>
