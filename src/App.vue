<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <keep-alive >
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>   
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>

