import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/welcome',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue')
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('../views/Goods.vue')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('../views/User.vue')
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        component: () => import('../views/Detail.vue')
      },
      {
        path: 'shopping',
        name: 'Shopping',
        component: () => import('../views/Shopping.vue')
      }
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login' || to.path === '/home/welcome') {
    return next()
  }else {
    const user = sessionStorage.getItem('user') || '';
    if(!user) {
      return next('/login')
    }else {
      return next()
    }
  }
})

export default router
