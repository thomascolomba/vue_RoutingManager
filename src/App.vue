<template>
  <div id="app">
    <RoutingManager/>
    <router-view/>
  </div>
</template>
<script>
import RoutingManager from '@/components/RoutingManager/RoutingManager.fragment.vue'

export default {
  name: 'app',
  components: {
    RoutingManager
  }
}
</script>
<style>
body {
  font-family: "Times New Roman", Times, serif;
}
</style>
