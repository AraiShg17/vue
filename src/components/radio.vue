<template>
  <div class="radio">
    <dl class="radio_inr">
      <dt class="radio_ttl">{{ ttl }}</dt>
      <dd class="radio_body" v-for="val in value" v-bind:key="val">
        <label class="radio_label">
          <input @change="setInput" @keyup="setInput" @blur="setInput" v-model="picked" v-bind:class="[picked === val ? 'is-current' : '']" class="radio_input" type="radio" :name="ttl" :value="val" />{{val}}
        </label>
      </dd>
    </dl>
    <transition name="err">
      <Error v-if="err === 'is-err'">項目を選択してください。</Error>
    </transition>
  </div>
</template>

<script>
import Error from '@/components/error.vue'

export default {
  props: ['ttl', 'value', 'flag', 'data'],
  data () {
    return {
      picked: this.data,
      err: null
    }
  },
  components: {
    Error
  },
  methods: {
    /* ステートの書き換え方2 */
    setInput () {
      if (this.flag === 'sex') {
        this.$store.state.input.sex = this.picked
      }
      if (this.picked === null) {
        this.val = ''
      }
      if (this.picked === '') {
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
.radio{
  &_inr{
    font-size: 1.6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  &_ttl{
    flex: 0 1 auto;
    padding: 10px 15px;
  }
  &_label{
    padding: 10px 15px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: pointer;
  }
  &_body{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  &_input{
    margin-right: 8px;
    background-color: #efefef;
    border-radius: 50px;
    width: 20px;
    height: 20px;
    position: relative;
    box-shadow: 1px 1px 6px #ccc inset;
    &::after{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #50A0F4;
      transform-origin: center;
      transform: scale(2);
      opacity: 0;

      transition: all .2s linear;
    }

    &.is-current{
      &::after{
        transform: scale(1);
        opacity: 1;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .radio{
    &_inr{
      font-size: 1.4rem;
      flex-flow: row wrap;
    }
    &_ttl{
      flex: 1 1 100%;
      padding: 5px 10px 5px 0;
    }
    &_label{
      padding: 5px 15px 5px 0;
    }
    &_body{
    }

    &_input{
      width: 15px;
      height: 15px;
      &::after{
        width: 8px;
        height: 8px;
      }

    }
  }
}
</style>
