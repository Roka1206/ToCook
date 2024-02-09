import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import HomeView from "../views/HomeView.vue";
import MealByIngredientView from "../views/MealByIngredientView.vue";
import MealByLetterView from "../views/MealByLetterView.vue";
import MealByNameView from "../views/MealByNameView.vue";
import MealDetailsView from "../views/MealDetailsView.vue";
import IngredientsView from "../views/IngredientsView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByNameView,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealByLetterView,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: IngredientsView,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealByIngredientView,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetailsView,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
