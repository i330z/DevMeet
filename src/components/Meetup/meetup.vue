<template>
    <div>
        <v-container>
            <v-layout>
                <v-flex>
                    <v-card>
                        <v-card-title>
                            <h2 class="primary--text">{{meetup.title}}</h2>
                        </v-card-title>
                        <v-img :src="meetup.src" height="340px"></v-img>
                        <v-card-text>
                            <div class="info--text">{{meetup.date}} - Where it takes place</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum fugiat, culpa non quo officiis eos fugit explicabo praesentium et.</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn depressed color="red" class="white--text">Register</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
export default {
    props:['id'],
    computed : {
        meetup () {
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>
