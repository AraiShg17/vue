<template>
  <ul class="dataside">
    <li class="dataside_list" v-for="val in data" :key="val.id">
      <a class="dataside_link" v-bind:class="[val.id === current.id ? 'is-current' : '']" :href="'#' + val.id" @click="click(val)"><span class="dataside_link_in">{{ val.slot }}</span></a>
    </li>
  </ul>
</template>

<script>
import store from '@/store'

export default {
  props: ['data'],
  data () {
    return {
      current: String
    }
  },
  methods: {
    /* ステートの書き換え方1 */
    click (val) {
      console.log(val.id)
      store.commit('setData', val)
      this.current = this.$store.getters.data
    }
  }
}
</script>

<style lang="scss" scoped>
  .dataside{
    &_list{
      margin-bottom: 1px;
      animation: translateT .3s ease both, fadeIn .3s ease both;
      @for $i from 0 through 10 {
        &:nth-of-type(#{$i}){
          animation-delay: ($i / 20) + s, ($i / 20) + s;
        }
      }
    }
    &_link {
      display: block;
      background-color: #eee;
      padding: 12px 15px;
      color: #50A0F4;
      position: relative;
      font-size: 1.2rem;

      transition: all .2s ease;

      &.is-current{
        color: #fff;
        background-color: #50A0F4;
      }

      &_in {
        position: relative;
        z-index: 1;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transform-origin: right center;
        transform: scale(0, 1);
        background-color: #50A0F4;
        transition: transform .2s ease;
      }

      &:hover {
        color: #fff;

        &::after {
          transform-origin: left center;
          transform: scale(1, 1);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .dataside{
      &_link {
        font-size: 1rem;
        padding: 8px 10px;
      }
    }
  }
</style>
