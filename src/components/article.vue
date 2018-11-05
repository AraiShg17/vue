<template>
  <article class="article">
    <h1 v-if="res.ttl" class="article_ttl">{{ res.ttl }}</h1>
    <div class="article_edit">
      <p class="article_edit_user" v-if="res.user">{{ res.user }}</p>
      <time class="article_edit_day" v-if="res.day">{{ res.day }}</time>
    </div>
      <ul class="article_keyword" v-if="res.keyword">
        <li class="article_keyword_list" v-for="item in res.keyword" v-bind:key="item">{{ item }}</li>
      </ul>
    <div v-if="res.eyecatch" class="article_icatch"><img :src="res.eyecatch[0]" :alt="res.eyecatch[1]"></div>
    <h2 v-if="res.leda" class="article_leda">{{ res.leda }}</h2>
    <div v-if="res.img1" class="article_img"><img :src="res.img1[0]" :alt="res.img1[1]"></div>
    <p v-if="res.txt1" class="article_txt">{{ res.txt1 }}</p>
    <div v-if="res.img2" class="article_img"><img :src="res.img2[0]" :alt="res.img2[1]"></div>
    <p v-if="res.txt2" class="article_txt">{{ res.txt2 }}</p>
    <div v-if="res.img3" class="article_img"><img :src="res.img3[0]" :alt="res.img3[1]"></div>
    <p v-if="res.txt3" class="article_txt">{{ res.txt3 }}</p>
  </article>
</template>

<script>
export default {
  props: ['res']
}
</script>

<style lang="scss" scoped>
.article{
  padding-bottom: 40px;
  &:last-of-type{
    border-bottom-width: 0;
    margin-bottom: 0;
  }

  &_ttl{
    font-size: 2rem;
    font-weight: 400;
    padding: 10px;
    border: 1px solid currentColor;
    border-width: 1px 0;
    margin-bottom: 20px;
  }
  &_edit{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &_user{
      font-size: 1.4rem;
      position: relative;
      &::before{
        content: "";
        background: url(/static/images/icon/icon_person.svg) left center / contain no-repeat;
        width: 30px;
        height: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    &_day{
      font-size: 1.4rem;
    }
  }
  &_keyword{
    display: flex;
    flex-flow: row wrap;
    margin: 0 0 10px;
    &_list{
      flex: 0 0 auto;
      font-size: 1.4rem;
      margin-bottom: 10px;
      color: #fff;
      background-color: #999;
      padding: 3px 15px;
      border-radius: 50px;
      margin-right: 10px;
    }
  }
  &_icatch{
    margin-bottom: 20px;
    img{
      width: 100%;
      height: auto;
    }
  }
  &_leda{
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
  &_img{
    margin-bottom: 20px;
    text-align: center;
  }
  &_txt{
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 768px) {
  .article{
    padding-bottom: 20px;
    &_ttl{
      font-size: 1.6rem;
      padding: 5px;
      margin-bottom: 15px;
    }
    &_edit{
      margin-bottom: 15px;

      &_user{
        font-size: 1.2rem;
        &::before{
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      }
      &_day{
        font-size: 1.2rem;
      }
    }
    &_keyword{
      margin: 0 0 8px;
      &_list{
        font-size: 1.2rem;
        margin-bottom: 5px;
        padding: 3px 10px;
        margin-right: 8px;
      }
    }
    &_icatch{
      margin-bottom: 10px;
    }
    &_leda{
      font-size: 1.6rem;
      margin-bottom: 15px;
    }
    &_img{
      margin-bottom: 15px;
    }
    &_txt{
      font-size: 1.2rem;
      margin-bottom: 15px;
    }
  }
}
</style>
