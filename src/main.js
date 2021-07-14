import Vue from 'vue';
import App from './App.vue';
// コンポーネントを置いている、vueファイルの読み込み
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false

// コンポーネントのグローバル登録(全てのVueファイルで使用できるコンポーネント)
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブの登録
Vue.directive('border', function(el, binding) {
  // 主に使われる関数は「bind」,「update」の二つ
  // bind,updateを一つの関数にまとめることができる
});

new Vue({
  render: h => h(App)
}).$mount('#app')
