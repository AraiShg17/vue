<template>
  <Layout>
    <Title title="FORM SAMPLE">フォーム関連のサンプル集<br>フォームの入力、バリデーション機能、確認ページ機能。</Title>

    <form class="form">
      <div class="form_box">
        <Input type="text" placeholder="NAME" flag="name" :data="this.$store.state.input.name" />
      </div>
      <div class="form_box">
        <Input type="tel" placeholder="TEL" flag="tel" :data="this.$store.state.input.tel" />
      </div>
      <div class="form_box">
        <radio ttl="SEX" flag="sex" :value="['male','female','other']" :data="this.$store.state.input.sex" />
      </div>
      <div class="form_box">
        <Select ttl="JOB" flag="job" placeholder="選択肢をお選びください。" :value="['会社員','派遣社員','アルバイト']" :data="this.$store.state.input.job" />
      </div>
      <div class="form_box">
        <Checkbox ttl="TOOLS" flag="tools" :value="['Ps','Ai','Dw','An']" :data="this.$store.state.input.tools" />
      </div>
      <div class="form_box">
        <Textarea flag="free" :data="this.$store.state.input.free" />
      </div>
      <div class="form_box">
        <Button txt="確認する" class="open" />
      </div>

      <transition name="modal">
        <Modal v-if="this.$store.getters.modal">
          <Confirm :data="this.$store.state.input" />
        </Modal>
      </transition>
    </form>
    {{this.$store.getters.input}}
  </Layout>
</template>

<script>
import Layout from '@/components/layout.vue'
import Input from '@/components/input.vue'
import Radio from '@/components/radio.vue'
import Checkbox from '@/components/checkbox.vue'
import Select from '@/components/select.vue'
import Textarea from '@/components/textarea.vue'
import Button from '@/components/button.vue'
import Modal from '@/components/modal.vue'
import Title from '@/components/title.vue'
import Confirm from '@/components/confirm.vue'

export default {
  data () {
    return {
      data: String
    }
  },
  components: {
    Layout,
    Input,
    Radio,
    Checkbox,
    Select,
    Textarea,
    Button,
    Modal,
    Title,
    Confirm
  }
}
</script>

<style lang="scss" scoped>
  .form{
    &_box{
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    .form{
      &_box{
        margin-bottom: 20px;
      }
    }
  }
</style>
