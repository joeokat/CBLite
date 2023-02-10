import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuggestView from '@/views/SuggestView.vue'
import BooksView from '@/views/BooksView.vue'
import AlmanacView from '@/views/AlmanacView.vue'
import CreedView from '@/views/CreedView.vue'
import EventsView from '@/views/EventsView.vue'
import SupportView from '@/views/SupportView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/suggest',
    name: 'suggest',
    component: SuggestView
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  },
  {
    path: '/almanac',
    name: 'almanac',
    component: AlmanacView
  },
  {
    path: '/creed',
    name: 'creed',
    component: CreedView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/support',
    name: 'support',
    component: SupportView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router