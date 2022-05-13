import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import CreateAccount from '../views/CreateAccount.vue'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Home.vue'
import AboutLuso from '../views/AboutLuso.vue'
import Investment from '../views/Investment.vue'
import Portfolio from '../views/Portfolio.vue'
import Profile from '../views/Profile.vue'
import showingComponent from '../views/showingComponent'

const routes = [
  { path: '/layout', name: 'layout', component: Layout, children:[
      { path: '/', name: 'home', component: Home },
      { path: '/about-luso', name: 'about-luso', component: AboutLuso },
      { path: '/create-account', name: 'create-account', component: CreateAccount },
      { path: '/sign-in', name: 'sign-in', component: SignIn },
      { path: '/investment', name: 'investment', component: Investment },
      { path: '/portfolio', name: 'portfolio', component: Portfolio },
      { path: '/profile', name: 'profile', component: Profile },
    ]
  },

  { path: '/test', name: 'test', component: showingComponent },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
