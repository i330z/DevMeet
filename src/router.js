import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Meetups from '@/components/Meetup/meetups.vue'
import CreateMeetup from '@/components/Meetup/createmeetup.vue'
import Profile from '@/components/User/profile.vue'
import SignIn from '@/components/User/signin.vue'
import SignUp from '@/components/User/signup.vue'
import Meetup from '@/components/Meetup/meetup.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/create',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      props: true,
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SignIn
    } 
  ]
})
