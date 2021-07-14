import Vue from 'vue';
import App from './App.vue';
// コンポーネントを置いている、vueファイルの読み込み
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false

// コンポーネントのグローバル登録(全てのVueファイルで使用できるコンポーネント)
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブの登録
Vue.directive('border', function(el) {
  // 「el」で今回borderに紐づいた「p」タグを取得している
  el.style.border = 'solid black 2px';
});

new Vue({
  render: h => h(App)
}).$mount('#app')
