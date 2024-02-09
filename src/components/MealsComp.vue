<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItemComp v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-700 p-8">
    There are no meals
  </div>
</template>

<script setup>
import MealItemComp from "./MealItemComp.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>

<style scoped></style>
