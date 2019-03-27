import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups : [
            {src:require('@/assets/slide1.jpg'), id:'qwqewrwer23we', title:'Meetup in Google', date:'2017-08-17'},
            {src:require('@/assets/slide2.jpg'), id:'hfhueuhf74efa', title:'Meetup in Yahoo', date:'2017-06-16'},
            {src:require('@/assets/slide3.jpg'), id:'ret465wgdsd7f', title:'Meetup in Bing', date:'2017-09-20'}
        ],
        user : {
            id : 'qwer123',
            registeredMeetups : ['qwqewrwer23we']
        }
    },
    mutations :{
        createMeetup (state,payload){
            state.loadedMeetups.push(payload)
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
        }
    },
    getters:{
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetA,meetB) =>{
                return meetA.date > meetB.date
            })
        },
        featuredMeetups (state, getters){
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