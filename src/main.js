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
  return value.toUpperCase(); // 文字列を大文字にする処理
});

// ミックスインのグローバル登録
// 全てのコンポーネント、インスタンスにおいて実行されるので、使用には注意が必要
// ミックスインのグローバル登録は基本的には使用しないという認識で良い
Vue.mixin({
  created() {
    console.log("グローバル ミックスイン");
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
