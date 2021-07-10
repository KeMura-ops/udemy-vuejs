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
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <pre>{{ eventData.title }}</pre> <!-- 「pre」タグによって空白を出力できる -->

      <label for="maxNumber">最大人数</label>
      <!-- 「.number」修飾子でユーザーが入力した数字の型を「number」にする(デフォルトの場合「string」) -->
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <!-- 型(type)を「number」にすることでinputタグ内でカウントアップできる -->
      <p>{{ typeof eventData.maxNumber }}</p> <!-- typeofでデータの型を検出する -->

      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <!-- .trim修飾子によって先頭と後ろに空白を打ち込んでもそれが検出されなくなる(文字の間の空白は検出される) -->
      <pre>{{ eventData.host }}</pre>
    </div>
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
      currentComponent: "About", // 初期値の設定
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host: ""
      }
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