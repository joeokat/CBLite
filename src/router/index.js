import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FeedbackView from "@/views/FeedbackView.vue";
import BooksView from "@/views/BooksView.vue";
import AlmanacView from "@/views/AlmanacView.vue";
import CreedView from "@/views/CreedView.vue";
import EventsView from "@/views/EventsView.vue";
import SupportView from "@/views/SupportView.vue";
import LiveView from "@/views/LiveView.vue";
import CardDetails from "@/components/Cards/CardDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/suggest",
    name: "suggest feedback",
    component: FeedbackView,
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
  },
  {
    path: "/almanac",
    name: "almanac",
    component: AlmanacView,
  },
  {
    path: "/creed",
    name: "creed",
    component: CreedView,
  },
  {
    path: "/events",
    name: "events",
    component: EventsView,
  },
  {
    path: "/support",
    name: "support",
    component: SupportView,
  },
  {
    path: "/live",
    name: "live",
    component: LiveView,
  },
  {
    path: "/cards/:id",
    name: "CardDetails",
    component: CardDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
