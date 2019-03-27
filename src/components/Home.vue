<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sd6 md6 class="text-xs-center text-sm-right">
                    <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
                </v-flex>
                <v-flex xs12 sd6 md6 class="text-xs-center text-sm-left">
                    <v-btn large router to="/meetup/create" class="info">Organize Meetup</v-btn>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 md12>
                    <v-carousel class="mt-3">
                        <v-carousel-item v-for="(item,i) in meetups" :key="i" :src="item.src">
                            <div class="title">
                                {{item.title}}
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 md12 class="text-xs-center mt-3">
                    <h2>Meetups are Awesome</h2>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
export default {
   computed: {
       meetups () {
           return this.$store.getters.featuredMeetups
       }
   }
}
</script>


<style scoped>
.title{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    align-items: center;
    font-size: 2em;
    background-color: rgba(0,0,0,0.5);
    padding: 30px;
    color: aliceblue;
}
</style>
