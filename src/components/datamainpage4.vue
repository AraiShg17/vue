<template>
  <div class="datamainpage" :id="data.id">
    <h1 class="datamainpage_ttl"><i class="datamainpage_ttl_icon"></i>{{ data.slot }}</h1>
    <p class="datamainpage_box">
      このページの解説文などをここに入力します。ページごとにレイアウトなどが完全に違っても良いようにコンポーネントを完全に切り離して作成しています。
    </p>
    <div class="datamainpage_box"><img src="../../static/images/data/page1/img_sample01.png" alt=""></div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
.datamainpage{
  animation:  fadeIn .4s ease;
  &_ttl{
    font-size: 2rem;
    margin-bottom: 25px;
    position: relative;
    padding-left: 5px;

    &_icon {
      border: 1px solid #50A0F4;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      display: inline-block;
      border-radius: 50%;
      margin-right: 10px;
      position: relative;

      &::after{
        content: "";
        position: absolute;
        left: -3px;
        top: 0;
        bottom: 0;
        max-width: available;
        width: 10px;
        height: 10px;
        background-color: #50A0F4;
        border-radius: 50%;
      }

      &::before{
        content: "";
        position: absolute;
        left: -3px;
        top: 0;
        bottom: 0;
        max-width: available;
        width: 3px;
        height: 3px;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
  &_box{
    margin-bottom: 25px;
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 768px) {
  .datamainpage{
    &_ttl{
      font-size: 1.4rem;
      margin-bottom: 20px;

      &_icon {
        width: 10px;
        height: 10px;
        margin-right: 8px;

        &::after{
          left: -2px;
          width: 5px;
          height: 5px;
        }

        &::before{
          width: 2px;
          height: 2px;
        }
      }
    }
    &_box{
      margin-bottom: 15px;
      font-size: 1.2rem;
    }
  }
}
</style>
