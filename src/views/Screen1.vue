<template>
  <div class="screen1">
    <h1>Screen 1</h1>
    <div><button @click="onScreen1Next">Next screen</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Screen1',
  methods: {
    onScreen1Next: function () {
      console.log('onScreen1Next')
      EventBus.$emit(BusinessEventList.Screen1Seen)
    }
  }
}
</script>
