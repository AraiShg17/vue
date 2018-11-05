<template>
  <button class="button" type="button" @click="setModal" >
    <span class="button_in">{{txt}}</span>
  </button>
</template>

<script>
import store from '@/store'

export default {
  props: ['txt'],
  data () {
    return {
    }
  },
  methods: {
    setModal () {
      /* ステートの書き換え方1 */
      if (this.$el.className.indexOf('open') >= 0) {
        store.commit('setModal', true)
      } else if (this.$el.className.indexOf('close') >= 0) {
        store.commit('setModal', false)
      }
    }
  },
  computed: {
    modal () {
      return this.$store.getters.modal
    }
  }
}
</script>

<style lang="scss" scoped>
  .button{
    width: 100%;
    border: 2px solid #50A0F4;
    display: block;
    text-align: center;
    padding: 10px;
    color: #50A0F4;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    position: relative;

    transition: all .2s ease;

    &_in{
      position: relative;
      z-index: 1;
    }

    &::after{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      transform-origin: right center;
      transform: scale(0,1);
      background-color: #50A0F4;
      transition: transform .2s ease;
    }

    &:hover{
      color: #fff;

      &::after{
        transform-origin: left center;
        transform: scale(1,1);
      }
    }

    &.-type2{
      color: #aaa;
      border-color: #aaa;

      &::after{
        background-color: #aaa;
      }
      &:hover{
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .button{
      padding: 5px;
      font-size: 1.4rem;
    }
  }
</style>
