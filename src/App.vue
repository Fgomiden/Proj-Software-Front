<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <!-- include="home" -->
        <keep-alive >
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>

