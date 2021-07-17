import Vue from 'vue';
import App from './App.vue';
// コンポーネントを置いている、vueファイルの読み込み
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false

// コンポーネントのグローバル登録(全てのVueファイルで使用できるコンポーネント)
Vue.component('LikeNumber', LikeNumber);

// フィルターの登録
// 引数の中身はフィルターの名前と関数とブロック変数を記述する
Vue.filter("upperCase", function(value) {
  // フィルターの場合、DOMが再描画されるたびに実行される
  // computedとフィルターを場合によって使い分ける
  console.log("フィルター");
  return value.toUpperCase(); // 文字列を大文字にする処理
});

new Vue({
  render: h => h(App)
}).$mount('#app')
