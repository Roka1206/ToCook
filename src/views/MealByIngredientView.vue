<template>
  <div class="p-8 pb-0 text-red-500">
    <h1 class="text-4xl font-bold mb-4 text-red-500">
      Meals for {{ ingredient.strIngredient }}
    </h1>
  </div>

  <MealsComp :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealsComp from "../components/MealsComp.vue";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style scoped></style>
