/* eslint-disable no-undef */
// r.f. https://youtrack.jetbrains.com/issue/WEB-22717#focus=streamItem-27-1558931-0-0
// ideの@補完有効化
System.config({
  paths: {
    '@/*': './*',
    'this.$store': '.nuxt/store.js/*'
  }
})
