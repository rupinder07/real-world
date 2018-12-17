import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Editor from './views/Editor.vue'
import ArticleDetails from './views/ArticleDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/articles/:slug',
      name: 'article-details',
      component: ArticleDetails,
      props: true
    }
  ]
})
