import Vue from 'vue'
import Vuex from 'vuex'
// import auth from '@/fb'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups : [
            {src:require('@/assets/slide1.jpg'), id:'qwqewrwer23we', title:'Meetup in Google', date:'2017-08-17'},
            {src:require('@/assets/slide2.jpg'), id:'hfhueuhf74efa', title:'Meetup in Yahoo', date:'2017-06-16'},
            {src:require('@/assets/slide3.jpg'), id:'ret465wgdsd7f', title:'Meetup in Bing', date:'2017-09-20'}
        ],
        user : {
            id : null
        }
    },
    mutations :{
        createMeetup (state,payload){
            state.loadedMeetups.push(payload)
        },

        setUser (state, payload) {
            state.user = payload
        }
    },
    actions:{
        createMeetup ({commit},payload){
            const meetup = {
                title : payload.title,
                location : payload.location,
                imageUrl : payload.imageUrl,
                description : payload.drscription,
                date : payload.date,
                time : payload.time,
                id : 'eqhesjks12'
            }

            commit('createMeetup', meetup)
        },

        signUserUp({commit}, payload){
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                const newUser ={
                    id : user.uid,
                    registeredMeetups : []
                }
                commit('setUser', newUser)
            })
            .catch((err) => {
                console.log(err.message)
            })
        },

        signUserIn({commit}, payload){
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user=>{
                const newUser = {
                    id : user.uid,
                    registeredMeetups : []
                }
                commit('setUser', newUser)
            })
            .catch(err=>{
                console.log(err.message)
            })
        },

        user (state) {
            console.log(state)
            return state.user
        }
    },
    getters:{
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetA,meetB) =>{
                return meetA.date > meetB.date
            })
        },
        featuredMeetups (getters){
            return getters.loadedMeetups.slice(0,5)
        },
        loadedMeetup (state) {
            return (meetupId) =>{
                return state.loadedMeetups.find((meetup)=>{
                    return meetup.id === meetupId
                })
            }
        }
    }
})