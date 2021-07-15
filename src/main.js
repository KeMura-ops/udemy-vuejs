import Vue from 'vue';
import App from './App.vue';
// コンポーネントを置いている、vueファイルの読み込み
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false

// コンポーネントのグローバル登録(全てのVueファイルで使用できるコンポーネント)
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブの登録
Vue.directive('border', function(el, binding) {
  // それぞれのデータをvalueの後に記述する
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg; // カスタムディレクティブの引数の値を取る
});

new Vue({
  render: h => h(App)
}).$mount('#app')
