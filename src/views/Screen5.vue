<template>
  <div class="screen5">
    <h1>Screen 5</h1>
    <div><button @click="onScreen5Next">I have been through all screens</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Screen5',
  methods: {
    onScreen5Next: function () {
      console.log('onScreen5Next')
      EventBus.$emit(BusinessEventList.Screen5Seen)
    }
  }
}
</script>
