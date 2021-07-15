import Vue from 'vue';
import App from './App.vue';
// コンポーネントを置いている、vueファイルの読み込み
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false

// コンポーネントのグローバル登録(全てのVueファイルで使用できるコンポーネント)
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブの登録
Vue.directive('border', function(el, binding) {
  // 「el」で今回「border」に紐づいたHTMLの「p」タグを取得しその要素を変更している
  el.style.border = 'solid black';
  // binding.valueとすることで、カスタムディレクティブ側のデータを受け取れる
  el.style.borderWidth = binding.value;
  // それぞれのデータをvalueの後に記述する
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
});

new Vue({
  render: h => h(App)
}).$mount('#app')
