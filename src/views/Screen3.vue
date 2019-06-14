<template>
  <div class="screen3">
    <h1>Screen 3</h1>
    <div><button @click="onScreen3Next">Next screen</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Screen3',
  methods: {
    onScreen3Next: function () {
      console.log('onScreen3Next')
      EventBus.$emit(BusinessEventList.Screen3Seen)
    }
  }
}
</script>
