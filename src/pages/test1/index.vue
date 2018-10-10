<template>
  <div class="container btns">
    <button class="calbtn" @click="hanleDecrement">-</button>
    <span class="calnum">{{count}}</span>
    <button class="calbtn" @click="hanleIncrement">+</button>
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