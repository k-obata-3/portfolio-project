import Vue from 'vue'
import VueRouter from "vue-router";
import Top from './components/pages/Top.vue'
import About from './components/pages/About.vue'
import Works from './components/pages/Works.vue'
import Skills from './components/pages/Skills.vue'
import Sns from './components/pages/Sns.vue'
import Contact from './components/pages/Contact.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: Top, name: 'TOP' },
        { path: '/about', component: About, name: 'ABOUT' },
        { path: '/works', component: Works, name: 'WORKs' },
        { path: '/skills', component: Skills, name: 'SKILLs' },
        { path: '/sns', component: Sns, name: 'SNS' },
        { path: '/contact', component: Contact, name: 'CONTACT' },
    ]
})