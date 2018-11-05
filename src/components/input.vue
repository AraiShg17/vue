<template>
  <div class="input">
    <input @change="setInput" @keyup="setInput" @blur="setInput" class="input_text" :class="err" type="text" v-model="val" :placeholder="placeholder" />
    <transition name="err">
      <Error v-if="err === 'is-err'" />
    </transition>
  </div>
</template>

<script>
import Error from '@/components/error.vue'

export default {
  props: ['flag', 'placeholder', 'data'],
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
      if (this.flag === 'name') {
        this.$store.state.input.name = this.val
      } else if (this.flag === 'tel') {
        this.$store.state.input.tel = this.val
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
.input{
  &_text{
    background-color:#efefef;
    font-size: 1.6rem;
    border-radius: 50px;
    padding: 10px 15px;
    width: 100%;
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
@media screen and (max-width: 768px) {
  .input{
    &_text{
      font-size: 1.4rem;
      padding: 5px 10px;
    }
  }
}
</style>
