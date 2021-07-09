<template>
  <div>
    <LikeHeader>
      <h3>リサフランク420/現代のコンピュー</h3>
    </LikeHeader>
    <!-- v-bindで動的に表現できる。(親のdataのnumberを指定している)「:」のみでも良い -->
    <LikeNumber :total-number="number" @my-click="incNumber"></LikeNumber> <!-- @my-clickはカスタムイベント -->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- 「keep-alive」タグでコンポーネントを包むことにより、切り替える以前の状態を保持できる -->
    <keep-alive>
      <component :is= "currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// ローカル登録(特定のファイル(App.vue)でのみ使用するコンポーネント)
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 92,
      currentComponent: "About" // 初期値の設定
    };
  },
  components: { // コンポーネンツオプション(オブジェクト)
    LikeHeader: LikeHeader, // 「LikeHeader」のみで短縮も可能。ちなみにキー: バリュー
    // 新しいコンポーネントの登録
    About,
    Home
  },
  methods: { // $emitによるカスタムイベントの処理
    incNumber(value) {
      this.number = value; // 引数であるvalueは子コンポーネントの$emitの中身になっている
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>