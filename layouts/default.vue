<template>
  <div>
    <nav
      class="navbar is-fixed-top  has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          SS-Expo
        </a>
        <!--        <div class="navbar-burger">-->
        <!--          <span />-->
        <!--          <span />-->
        <!--          <span />-->
        <!--        </div>-->
      </div>
    </nav>

    <section class="main-content columns nav-spacer">
      <!--      <aside class="column is-2 section">-->
      <!--        <p class="menu-label is-hidden-touch">-->
      <!--          General-->
      <!--        </p>-->
      <!--        <ul class="menu-list">-->
      <!--          <li v-for="(item, key) of items" :key="key">-->
      <!--            <nuxt-link :to="item.to" exact-active-class="is-active">-->
      <!--              <b-icon :icon="item.icon" /> {{ item.title }}-->
      <!--            </nuxt-link>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </aside>-->

      <div class="container column is-12">
        <nuxt />
      </div>
    </section>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter'

export default {
  components: { GlobalFooter },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.nav-spacer {
  margin: 3rem 0;
}
</style>
