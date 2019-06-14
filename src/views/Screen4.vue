<template>
  <div class="screen4">
    <h1>Screen 4</h1>
    <div><button @click="onScreen4Next">Next screen</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Screen4',
  methods: {
    onScreen4Next: function () {
      console.log('onScreen4Next')
      EventBus.$emit(BusinessEventList.Screen4Seen)
    }
  }
}
</script>
