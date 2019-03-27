<template>
    <nav>
        <v-toolbar>
            <v-toolbar-side-icon class="grey--text hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <router-link to="/" tag="span" style="cursor:pointer">
                <span class="font-weight-light">DEV</span>
                <span>Meet</span>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey" class="hidden-xs-only" v-for="item in menuItems" :key="item.title" router :to ="item.link">
                <span>{{item.title}}</span>
                <v-icon right>{{item.icon}}</v-icon>
            </v-btn>

        </v-toolbar>
            <v-navigation-drawer temporary v-model="drawer" app class="indigo">
                <v-list>
                    <v-list-tile v-for="item in menuItems" :key="item.title" class="white--text" router :to ="item.link">
                        <v-list-tile-action>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>{{item.title}}</v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
    </nav>
</template>



<script>
export default {
    data(){
        return{
            drawer : false,
            menuItems : [
                {icon:'supervisor_account', title:'View Meetups', link:'/meetups'},
                {icon:'room', title:'Organize Meetup', link: '/meetup/create'},
                {icon:'person', title:'Profile', link: '/profile'},
                {icon:'face', title:'Sign up', link:'/signup'},
                {icon:'lock_open', title:'Sign In', link:'/signin'}
            ]
        }
    }
}
</script>
