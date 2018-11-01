<template>
  <article class="datamain">
    <transition name="data" mode="out-in">
      <DataMainPage1 :data="data" v-if="data.id === 'cat1'" />
      <DataMainPage2 :data="data" v-if="data.id === 'cat2'" />
      <DataMainPage3 :data="data" v-if="data.id === 'cat3'" />
      <DataMainPage4 :data="data" v-if="data.id === 'cat4'" />
      <DataMainPage5 :data="data" v-if="data.id === 'cat5'" />
    </transition>
  </article>
</template>

<script>
import DataMainPage1 from '@/components/datamainpage1.vue'
import DataMainPage2 from '@/components/datamainpage2.vue'
import DataMainPage3 from '@/components/datamainpage3.vue'
import DataMainPage4 from '@/components/datamainpage4.vue'
import DataMainPage5 from '@/components/datamainpage5.vue'

export default {
  props: ['data'],
  components: {
    DataMainPage1,
    DataMainPage2,
    DataMainPage3,
    DataMainPage4,
    DataMainPage5
  }
}

</script>

<style lang="scss" scoped>
.datamain{
  margin: 0 0 0 25px;
  overflow: hidden;
}
</style>
