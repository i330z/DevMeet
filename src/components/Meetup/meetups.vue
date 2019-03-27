<template>
    <div>
        <v-container>
            <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
                <v-flex xs12>
                    <v-card class="blue lighten-3">
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs5 sm4 md3>
                                    <v-img :src="meetup.src" height="130px"></v-img>
                                </v-flex>
                                <v-flex xs7 sm8 md9>
                                    <v-card-title primary-title>
                                        <div>
                                        <h3>{{meetup.title}}</h3>
                                        <div>{{meetup.date}}</div>
                                        </div>
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn flat :to="'/meetups/' + meetup.id">
                                        <v-icon left>arrow_forward</v-icon>
                                            View Meet
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups
        }
    }
}
</script>

