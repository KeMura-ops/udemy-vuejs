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
  if (binding.modifiers.round) { // 修飾子はif文で条件分岐し、trueであれば以降の処理が実行される
    el.style.borderRadius = "0.5rem";
  }
  if (binding.modifiers.shadow) { // 「modifiers」を使用することが重要
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app')
