import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isShowBottomNav: true,
      title: 'Jihye - Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      title: 'Jihye - AboutMe',
      type: '/about'
    }
  },
  {
    path: '/projects',
    name: 'Projects',

    component: () => import(/* webpackChunkName: "projects" */ '@/views/Projects.vue'),
    meta: {
      title: 'Jihye - Projects',
      type: '/projects'
    }
  },
  {
    path: '/projects/single-project',
    name: 'Single Projects',
    props: (route) => ({ projectNo: Number(route.query.projectNo) }),
    component: () => import(/* webpackChunkName: "projects" */ '@/views/SingleProject.vue'),
    meta: {
      title: 'Jihye - ProjectDetail',
      type: '/projects/single-project'
    }
  }
]

// github page 새로고침 시 404에러를 createWebHashHistory로 해결
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  const nearestWithMeta = to.matched.slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title
  }

  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map((el) => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return next()

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })

      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    .forEach((tag) => document.head.appendChild(tag))

  next()
})
