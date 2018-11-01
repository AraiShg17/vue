<template>
  <div class="modal close" @click.self="setModal">
    <div class="modal_inner">
      <div class="modal_main">
        <slot></slot>
      </div>
      <ul class="modal_btn">
        <li class="modal_list"><Button txt="閉じる" class="close -type2" /></li>
        <li class="modal_list"><Button txt="送信する" class="close" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import Button from '@/components/button.vue'

export default {
  components: {
    Button
  },
  methods: {
    /* ステートの書き換え方1 */
    setModal () {
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
  .modal{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index:100;
    margin: auto;
    background-color: rgba(#000,.4);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 15px;

    &_inner{
      background-color: #fff;
      padding: 30px;
      flex: 1 1 auto;
      width: 100%;
      max-width: 800px;
      max-height: 90vh;
      animation: modal1 .4s ease .2s both;
    }
    &_main{
      margin-bottom: 30px;
    }
    &_btn{
      display: flex;
      margin: 0 -10px;
    }
    &_list{
      flex: 1 1 50%;
      margin: 0 10px;
    }
  }
  @keyframes modal1{
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
