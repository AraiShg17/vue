<template>
  <Layout>
    <Title title="AXIOS SAMPLE">AXIOS機能サンプル。<br>jsonからデータを取得してデータ表示。非同期通信による読み込み時ローディング処理。</Title>

    <User />
  </Layout>
</template>

<script>
import User from '@/components/user.vue'
import Layout from '@/components/layout.vue'
import Title from '@/components/title.vue'

export default {
  components: {
    User,
    Layout,
    Title
  }
}
</script>

<style lang="scss" scoped>
</style>
