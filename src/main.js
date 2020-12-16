import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Base from './Base.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './common.css'

// router で定義しないと読み込まれない
import router from './router.js'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  render: h => h(Base),
}).$mount('#app')
