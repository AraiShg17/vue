<template>
  <div class="select">
    <select @change="setInput" @keyup="setInput" @blur="setInput" class="select_text" :class="err" v-model="val">
      <option value="">{{ placeholder }}</option>
      <option v-for="val in value" v-bind:key="val" :value="val">{{ val }}</option>
    </select>
    <transition name="err">
      <Error v-if="err === 'is-err'">未選択です。</Error>
    </transition>
  </div>
</template>

<script>
import Error from '@/components/error.vue'

export default {
  props: ['flag', 'value', 'placeholder', 'data'],
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
      if (this.flag === 'job') {
        this.$store.state.input.job = this.val
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
.select{
  &_text{
    background: #efefef url(../../static/images/icon/icon_dropdown.svg) calc(100% - 10px) center / 20px auto no-repeat;
    font-size: 1.6rem;
    border-radius: 5px;
    padding: 10px 35px 10px 15px;
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
  .select{
    &_text{
      background-size: 15px auto;
      font-size: 1.4rem;
      padding: 5px 55px 5px 10px;
    }
  }
}
</style>
