<template>
  <Layout>
    <Title title="SCROLL SAMPLE">インフィニティスクロール機能サンプル。<br>ページスクロールと共にjsonからデータを取得して記事を表示</Title>

    <div class="scroll" :data-scroll="this.$store.getters.scroll">
      <div class="scroll_main" id="js-scroll-list">
        <Article :res="val" v-for="val in res" :key="val.id"></Article>
        <div class="scroll_load">
          <Nowload v-if="this.$store.getters.mask"></Nowload>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout.vue'
import Title from '@/components/title.vue'
import Article from '@/components/article.vue'
import Nowload from '@/components/nowload.vue'
import store from '@/store'
import axios from 'axios'

let getURL = './static/json/article.json'

/* jsonデータ取得 */
const axiosSet = (_this, limit, time) => {
  store.commit('setMask', true)

  axios
    .get(getURL)
    .then((response) => {
      _this.$store.state.article.current = limit
      _this.$store.state.article.limit = response.data.length
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          _this.res = response.data.slice(0, limit)
          resolve(response)
        }, time)
      })
    })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      store.commit('setMask', false)
    })
}

var onScroll = () => {
  store.commit('setHeight', document.documentElement.scrollHeight || document.body.scrollHeight)
  store.commit('setScroll', window.pageYOffset + window.innerHeight)
}

export default {
  components: {
    Layout,
    Title,
    Article,
    Nowload
  },
  data () {
    return {
      res: String,
      limit: 0
    }
  },
  methods: {
  },
  mounted () {
    document.addEventListener('scroll', onScroll)
    if (this.limit !== document.getElementById('js-scroll-list').children.length + 1) {
      this.limit = document.getElementById('js-scroll-list').children.length + 1
      axiosSet(this, this.limit, 0)
    }
  },
  updated () {
    onScroll()
    if (this.$store.state.article.current < this.$store.state.article.limit) {
      if (this.$store.getters.height === this.$store.getters.scroll) {
        if (this.limit !== document.getElementById('js-scroll-list').children.length + 1) {
          this.limit = document.getElementById('js-scroll-list').children.length
          axiosSet(this, this.limit, 600)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll{
  display: flex;
  flex-flow: row nowrap;
  &_main{
    flex: 1 1 auto;
    padding-bottom: 150px;
    position: relative;
  }
  &_load{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
}
</style>
