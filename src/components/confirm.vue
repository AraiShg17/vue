<template>
  <div class="confirm">
    <dl class="confirm_unit">
      <dt class="confirm_ttl">NAME</dt>
      <dd class="confirm_body">{{ data.name }}</dd>
    </dl>
    <dl class="confirm_unit">
      <dt class="confirm_ttl">TEL</dt>
      <dd class="confirm_body">{{ data.tel }}</dd>
    </dl>
    <dl class="confirm_unit">
      <dt class="confirm_ttl">SEX</dt>
      <dd class="confirm_body">{{ data.sex }}</dd>
    </dl>
    <dl class="confirm_unit">
      <dt class="confirm_ttl">JOB</dt>
      <dd class="confirm_body">{{ data.job }}</dd>
    </dl>
    <dl class="confirm_unit">
      <dt class="confirm_ttl">TOOLS</dt>
      <dd class="confirm_body">
        <p class="confirm_item" v-for="val in data.tools" v-bind:key="val">{{ val }}</p>
      </dd>
    </dl>
    <dl class="confirm_unit">
      <dt class="confirm_ttl">FREE</dt>
      <dd class="confirm_body">{{ data.free }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
.confirm{
  &_unit{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    border-bottom: 1px dashed #ccc;
  }
  &_ttl{
    padding: 10px;
    flex: 0 0 200px;
  }
  &_body{
    padding: 10px;
    flex: 1 1 calc(100% - 200px);
  }
  &_item{
    display: inline-block;
    padding-right: 10px;
  }
}
</style>
