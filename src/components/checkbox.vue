<template>
  <div class="checkbox">
    <dl class="checkbox_inr">
      <dt class="checkbox_ttl">{{ ttl }}</dt>
      <dd class="checkbox_body" v-for="val in value" v-bind:key="val">
        <label class="checkbox_label">
          <input @change="setInput" @keyup="setInput" @blur="setInput" v-model="checked" v-bind:class="[checked.indexOf(val) >= 0 ? 'is-current' : '']" class="checkbox_input" type="checkbox" :name="ttl" :value="val" />{{val}}
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
      checked: this.data,
      err: null
    }
  },
  components: {
    Error
  },
  methods: {
    /* ステートの書き換え方2 */
    setInput () {
      if (this.flag === 'tools') {
        this.$store.state.input.tools = this.checked
      }
      if (this.checked.length === 0) {
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
.checkbox{
  &_inr{
    font-size: 1.6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  &_ttl{
    flex: 0 1 auto;
    padding: 15px;
  }
  &_label{
    padding: 15px;
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
</style>
