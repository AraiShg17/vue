<template>
  <div>
    <input type="hidden" :value="user">
    <ul class="userSelect">
      <li class="userSelect_list">
        <button v-bind:class="[this.$store.getters.user === 'arai' ? 'is-current' : '']" class="userSelect_btn" @click="setUser">arai</button>
      </li>
      <li class="userSelect_list">
        <button v-bind:class="[this.$store.getters.user === 'guest' ? 'is-current' : '']"  class="userSelect_btn" @click="changeUser">guest</button>
      </li>
    </ul>
    <Cover v-bind:class="[this.$store.getters.mask ? 'is-load' : 'is-fin']">
      <dl class="user">
        <dt class="user_ttl">名前</dt>
        <dd class="user_body">{{ res.name }}</dd>
        <dt class="user_ttl">ID</dt>
        <dd class="user_body">{{ res.id }}</dd>
        <dt class="user_ttl">性別</dt>
        <dd class="user_body">{{ res.sex }}</dd>
        <dt class="user_ttl">年齢</dt>
        <dd class="user_body">{{ res.age }}</dd>
        <dt class="user_ttl">生年月日</dt>
        <dd class="user_body">{{ res.berthday }}</dd>
      </dl>
    </Cover>
  </div>
</template>

<script>
import store from '@/store'
import axios from 'axios'
import Cover from '@/components/cover.vue'

let getURL = './static/json/user.json'

let id = null

/* jsonデータ取得 */
const axiosSet = (_this, id) => {
  id = _this.$store.getters.user

  store.commit('setMask', true)
  axios
    .get(getURL)
    .then((response) => {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          _this.res = response.data[id]
          resolve(response)
        }, 300)
      })
    })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      store.commit('setMask', false)
    })
  return id
}

export default {
  components: {
    Cover
  },
  methods: {
    /* ステートの書き換え方1 */
    setUser () {
      store.commit('setUser', {user: 'arai'})
    },
    /* ステートの書き換え方2 */
    changeUser () {
      this.$store.state.user = 'guest'
    }
  },
  data () {
    return {
      res: String
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    mask () {
      return this.$store.getters.mask
    }
  },
  mounted () {
    id = axiosSet(this, id)
  },
  updated () {
    /* idに変更がなければreturn */
    if (id !== this.$store.getters.user) {
      id = axiosSet(this, id)
    }
  }
}
</script>

<style lang="scss" scoped>
.user{
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  font-size: 1.4rem;
  font-weight: bold;
  &_ttl{
    flex: 0 0 200px;
    border-bottom: 1px solid rgba(#aaa,1);
    padding: 10px;

    &:last-of-type{
      border-bottom-width: 0;
    }
  }
  &_body{
    flex: 1 1 calc(100% - 200px);
    border-bottom: 1px solid rgba(#aaa,1);
    padding: 10px;

    &:last-of-type{
      border-bottom-width: 0;
    }
  }

  &Select{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 30px;
    &_list{
      flex: 0 1 auto;
      padding: 0 10px;
    }
    &_btn{
      width: 100%;
      display: block;
      text-align: center;
      padding: 5px 10px;
      color: #666;
      font-size: 1.6rem;
      font-weight: bold;
      cursor: pointer;
      position: relative;

      transition: all .2s ease;
      &::after{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -15px;
        margin: auto;
        border-width: 10px 6px;
        border-style: solid;
        border-color: rgba(#666,1) rgba(#666,0) rgba(#666,0);
        width: 0;
        height: 0;
        opacity: 0;

        transition: all .2s ease;
      }

      &:hover{
        opacity: .6;
      }
      &.is-current{
        opacity: 1;
        cursor: default;
        &::after{
          bottom: -20px;
          opacity: 1;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .user{
    padding: 10px 0;
    font-size: 1.2rem;
    &_ttl{
      flex: 0 1 100px;
      padding: 10px;
    }
    &_body{
      flex: 1 1 calc(100% - 100px);
      padding: 10px;
    }

    &Select{
      margin-bottom: 20px;
      &_list{
        padding: 0 10px 0 0;
      }
      &_btn{
        font-size: 1.4rem;
      }
    }
  }
}
</style>
