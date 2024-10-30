<script setup>
import { RouterView } from 'vue-router'
import MainMenu from './components/MainMenu.vue';

</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <MainMenu />      
      <RouterView class="router-view" />
    </div>
  </header>

  <main>
    
    <!-- <TheWelcome /> -->
  </main>
</template>

<style>
* {
  margin: 0 auto;
  box-sizing: border-box;
}

.router-view {
  grid-area: 'router-view';
  padding: 1rem;
  border: 1px solid rgb(180, 180, 180);
}

</style>
