<template>
  <Layout>
    <Title title="DATA SAMPLE">サイドバー項目リストを選択して中身を切り替えるページ</Title>

    <div class="data">
      <div class="data_side">
        <DataSide :data="side" />
      </div>
      <div class="data_main">
        <DataMain :data="this.$store.getters.data" />
      </div>
    </div>

  </Layout>
</template>

<script>
import Layout from '@/components/layout.vue'
import Title from '@/components/title.vue'
import DataSide from '@/components/dataside.vue'
import DataMain from '@/components/datamain.vue'

export default {
  data () {
    return {
      side: [
        {'id': 'cat1', 'slot': 'タイトルテキストサンプル'},
        {'id': 'cat2', 'slot': 'レスポンシブ対応のCSSフレームワーク25選'},
        {'id': 'cat3', 'slot': 'フロントエンドエンジニアなら押さえておきたい！最近登場した注目のJavaScript＆CSSライブラリ10選'},
        {'id': 'cat4', 'slot': 'たった1行で追加できるものも！簡単にアニメーションを加えられるJavaScript＆CSSプラグイン17選'},
        {'id': 'cat5', 'slot': '基礎からしっかり学べる！JavaScriptライブラリ・フレームワーク7選'}
      ]
    }
  },
  components: {
    Layout,
    Title,
    DataSide,
    DataMain
  }
}
</script>

<style lang="scss" scoped>
  .data{
    display: flex;
    flex-flow: row nowrap;
    &_side{
      flex: 0 0 200px;
    }
    &_main{
      flex: 1 1 auto;
    }
  }
</style>
