<template>
  <div class="title">
    <h2 class="title_h">{{ title }}</h2>
    <p class="title_txt">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ['title', 'text'],
  components: {
  }
}
</script>

<style lang="scss" scoped>
.title{
  margin-bottom: 40px;
  color: inherit;
  &_h{
    font-size: 3rem;
    margin-bottom: 25px;
    position: relative;

    &::after{
      content: "";
      display: block;
      height: 2px;
      width: auto;
      background-color: currentColor;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      margin: auto;
      animation: txtBdr .8s cubic-bezier(.18,1.06,1,1) both;
    }
  }
  &_txt{
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
}
</style>
