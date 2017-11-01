import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import newNote from '@/components/note/note.vue' 
import noteText from '@/components/note/notetext/noteText.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/note',
      name: 'newNote',
      component: newNote
    },
    {
      path: '/noteText',
      name: 'noteText',
      component: noteText
    },
  ]
})
