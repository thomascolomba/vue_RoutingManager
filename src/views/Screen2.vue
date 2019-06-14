<template>
  <div class="screen2">
    <h1>Screen 2</h1>
    <div><button @click="onScreen2Next">Next screen</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Screen2',
  methods: {
    onScreen2Next: function () {
      console.log('onScreen2Next')
      EventBus.$emit(BusinessEventList.Screen2Seen)
    }
  }
}
</script>
