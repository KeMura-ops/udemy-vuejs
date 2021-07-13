import Vue from 'vue';
import App from './App.vue';
// コンポーネントを置いている、vueファイルの読み込み
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false

// コンポーネントのグローバル登録(全てのVueファイルで使用できるコンポーネント)
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブの登録
Vue.directive('border', {
  // 5つの関数を記述する
  bind() {},
  inserted() {},
  update() {},
  componentUpdated() {},
  unbind() {}
});

new Vue({
  render: h => h(App)
}).$mount('#app')
