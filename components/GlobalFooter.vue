<template>
  <nav
    class="navbar is-fixed-bottom is-dark nav-origin"
    role="navigation"
    aria-label="main navigation"
  >
    <!--  選択時の背景云々を調整する必要がある  -->
    <div class="tabs is-fullwidth">
      <ul>
        <li>
          <!--          <a :class="{ active: activePage === 0 }" @click="switchPage(0)">-->
          <!--            <span>ホーム</span>-->
          <!--          </a>-->
          <nuxt-link to="/home"><span>ホーム</span></nuxt-link>
        </li>
        |
        <li>
          <!--          <a :class="{ active: activePage === 1 }" @click="switchPage(1)">-->
          <!--            <span>通知</span>-->
          <!--          </a>-->
          <nuxt-link to="/notification"><span>通知</span></nuxt-link>
        </li>
        |
        <li>
          <!--          <a :class="{ active: activePage === 2 }" @click="switchPage(2)">-->
          <!--            <span>ユーザー</span>-->
          <!--          </a>-->
          <nuxt-link to="/user"><span>ユーザー</span></nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GlobalFooter',
  computed: {
    activePage() {
      return this.$store.state.setting.activePage
    }
  },
  methods: {
    switchPage(index) {
      this.$store.dispatch('setting/switchActivePage', index)
    }
  }
}
</script>

<style scoped lang="scss">
.nav-origin {
  text-align: center;
}
.nav-item-active {
  border-bottom-color: #dbdbdb;
}
/*今回用にスタイルを少し上書き*/
.tabs {
  a {
    border-bottom-color: #333333;
  }
  a:hover {
    border-bottom-color: #dbdbdb;
  }
  .nuxt-link-active {
    border-bottom-color: #dbdbdb;
  }
  ul {
    border-bottom-color: #333333;
  }
  span {
    color: white;
  }
}
</style>
