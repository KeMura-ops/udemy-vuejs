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
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>

      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>

      <label for="detail">イベントの内容</label>
      <!-- 複数行テキスト(textarea)にもv-modelを使用し双方向にデータバインディングができる -->
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <!-- スタイルに「"white-space: pre;"」と指定することで<pre>と同じ挙動になる -->
      <p style="white-space: pre;">{{ eventData.detail }}</p>
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
        title: "",
        maxNumber: 0,
        host: "",
        detail: ""
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