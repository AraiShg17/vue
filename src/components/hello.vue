<template>
  <div class="hello">
    <h2 class="hello_ttl">{{ msg }}</h2>
    <p class="hello_txt">{{ txt }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue.js App',
      txt: 'Vue.jsを使った各種機能サンプル集'
    }
  }
}
</script>

<style lang="scss" scoped>
.hello{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  &_ttl{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 60px;
    font-weight: 600;
  }
  &_txt{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 120px;
  }
}
</style>
