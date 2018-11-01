<template>
  <div class="nowload">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.nowload {
  display: inline-block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: relative;
  border-top: 6px solid rgba(128,128,128, 0.2);
  border-right: 6px solid rgba(128,128,128, 0.2);
  border-bottom: 6px solid rgba(128,128,128, 0.2);
  border-left: 6px solid #808080;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  &:after{
    content: "";
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
