import BusinessEventList from '@/events/BusinessEventList.js'
import EventBus from '@/events/EventBus.js'
import router from '@/router'

export default {
  name: 'RoutingManager',
  mounted: function () {
    EventBus.$on(BusinessEventList.Screen1Seen, this.onScreen1Seen)
    EventBus.$on(BusinessEventList.Screen2Seen, this.onScreen2Seen)
    EventBus.$on(BusinessEventList.Screen3Seen, this.onScreen3Seen)
    EventBus.$on(BusinessEventList.Screen4Seen, this.onScreen4Seen)
    EventBus.$on(BusinessEventList.Screen5Seen, this.onScreen5Seen)
  },
  beforeDestroy: function () {
    EventBus.$off(BusinessEventList.Screen1Seen, this.onScreen1Seen)
    EventBus.$off(BusinessEventList.Screen2Seen, this.onScreen2Seen)
    EventBus.$off(BusinessEventList.Screen3Seen, this.onScreen3Seen)
    EventBus.$off(BusinessEventList.Screen4Seen, this.onScreen4Seen)
    EventBus.$off(BusinessEventList.Screen5Seen, this.onScreen5Seen)
  },
  methods: {
    onScreen1Seen: function () {
      console.log('main.js onScreen1Seen')
      router.push({ name: 'Screen2' })
    },
    onScreen2Seen: function () {
      console.log('main.js onScreen2Seen')
      router.push({ name: 'Screen3' })
    },
    onScreen3Seen: function () {
      console.log('main.js onScreen3Seen')
      router.push({ name: 'Screen4' })
    },
    onScreen4Seen: function () {
      console.log('main.js onScreen4Seen')
      router.push({ name: 'Screen5' })
    },
    onScreen5Seen: function () {
      console.log('main.js onScreen5Seen')
      // nothing to do
    }
  }
}
