<template>
  <div class="cover">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cover{
  position: relative;
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
    background-color: #eee;
    transition: transform .2s ease;
  }

  &.is-load{
    &::after{
      transform-origin: left center;
      transform: scale(1,1);
    }
  }
  &.is-fin{
    &::after{
      transform-origin: right center;
      transform: scale(0,1);
    }
  }
}
</style>
