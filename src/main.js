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
  // それぞれ以下のような引数を持つ
  bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐ついた時(初めの一回にのみ呼ばれる)
  },
  inserted(el, binding, vnode) {
    // 親Nodeに挿入された時(実際のDOMに追加された時)
  },
  update(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度に。子コンポーネントが更新される前。(親に変更があるが、子には影響がない状態)
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度に。子コンポーネントが更新される後。(親のデータなどに変更があって、その子にも変更がある時)
  },
  unbind(el, binding, vnode) {
    // ディレクティブが紐ついている要素から取り除かれた時
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app')
