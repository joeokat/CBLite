import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from '@/views/NotesView.vue'
import BooksView from '@/views/BooksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router