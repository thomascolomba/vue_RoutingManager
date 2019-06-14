import Vue from 'vue'
import Router from 'vue-router'
import Screen1 from './views/Screen1.vue'
import Screen2 from './views/Screen2.vue'
import Screen3 from './views/Screen3.vue'
import Screen4 from './views/Screen4.vue'
import Screen5 from './views/Screen5.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Screen1
    },
    {
      path: '/screen1',
      name: 'Screen1',
      component: Screen1
    },
    {
      path: '/screen2',
      name: 'Screen2',
      component: Screen2
    },
    {
      path: '/screen3',
      name: 'Screen3',
      component: Screen3
    },
    {
      path: '/screen4',
      name: 'Screen4',
      component: Screen4
    },
    {
      path: '/screen5',
      name: 'Screen5',
      component: Screen5
    }
  ]
})
