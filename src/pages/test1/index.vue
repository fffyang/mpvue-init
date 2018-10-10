<template>
  <div class="container btns">
    <button class="calbtn p5" @click="hanleDecrement">-</button>
    <span class="calnum">{{count}}</span>
    <button class="calbtn p5" @click="hanleIncrement">+</button>
  </div>
</template>

<script>
import globalStore from '../../stores/global-store'

export default {
  computed: {
    count () {
      return globalStore.state.count
    }
  },
  mounted () {
    console.log('url', this.$root.$mp.query)
  },
  methods: {
    hanleIncrement () {
      globalStore.commit('increment')
    },

    hanleDecrement () {
      globalStore.commit('decrement')
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: center;
  .calnum {
    color: red;
    font-size: 32px;
  }
}
</style>