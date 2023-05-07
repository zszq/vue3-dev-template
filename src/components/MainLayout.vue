<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

const route = useRoute();
const routeKey = ref(route.fullPath);
const cachedViews = computed(() => {
  return [];
});
</script>

<template>
  <NavBar />

  <RouterView v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in" appear>
      <keep-alive :include="cachedViews">
        <component :is="Component" :key="routeKey" />
      </keep-alive>
    </transition>
  </RouterView>
</template>

<style lang="scss" scoped></style>
