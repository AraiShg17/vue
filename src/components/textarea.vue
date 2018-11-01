<template>
  <div class="textarea">
    <textarea class="textarea_input" @change="setInput" @keyup="setInput" @blur="setInput" :class="err" v-model="val"></textarea>
    <transition name="err">
      <Error v-if="err === 'is-err'" />
    </transition>
  </div>
</template>

<script>
import Error from '@/components/error.vue'

export default {
  props: ['flag', 'data'],
  data () {
    return {
      val: this.data,
      err: null
    }
  },
  components: {
    Error
  },
  methods: {
    /* ステートの書き換え方2 */
    setInput () {
      if (this.flag === 'free') {
        this.$store.state.input.free = this.val
      }
      if (this.val === null) {
        this.val = ''
      }
      if (this.val === '') {
        this.err = 'is-err'
      } else {
        this.err = 'is-safe'
      }
    }
  },
  computed: {
    input () {
      return this.$store.getters.input
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea{
  &_input{
    background-color:#efefef;
    font-size: 1.6rem;
    border-radius: 5px;
    padding: 10px 15px;
    width: 100%;
    height: 200px;
    box-shadow: 1px 1px 6px #ccc inset;
    margin-bottom: 5px;

    transition: all .2s linear;
    &.is-safe{
      box-shadow: 1px 1px 6px rgba(#50A0F4,.2) inset;
      background-color: rgba(#50A0F4,.1);
    }
    &.is-err{
      box-shadow: 1px 1px 6px rgba(#E33134,.2) inset;
      background-color: rgba(#E33134,.1);
    }
  }
}
</style>
