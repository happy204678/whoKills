import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
const callist = () => import('@/views/callist')
const calculator = () => import('@/views/calculator')
const todo = () => import('@/views/todo')
const whokills = () => import('@/views/whokills')
const login = () => import('@/views/login')
const game = () => import('@/views/game')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/callist',
      name: 'callist',
      component: callist
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo,
      meta: { requireAuth: true }
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: calculator,
      meta: { requireAuth: true }
    },
    {
      // path: '/login',
      path: '/',
      name: 'login',
      component: login,
      meta: { requireAuth: true }
    },
    {
      path: '/whokills/',
      name: 'whokills',
      component: whokills,
      meta: { requireAuth: true }
    },
    {
      path: '/game/',
      name: 'game',
      component: game,
      meta: { requireAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    const isLogin = store.getters.userName.length > 0
    if (!isLogin) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   const isLogin = store.getters.authToken
  //   if (!isLogin) {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 必須向下走
  // }
})

export default router
