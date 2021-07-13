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
    <div style="padding: 10rem;">
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text"
        :value="eventData.title"
        @input="eventData.title = $event.target.value"
      > <!-- 実際のv-modelの中身は上記の通り
            inputの入力値がvalueになっており
            それをeventData.titleに代入している
            ちなみにlazy修飾子を使用する場合は
            @inputの部分を@changeに変更する
            上記のコードはinputタグで型がtextの場合のv-modelの変化となる
            タグや型によってv-modelの中身は変化する -->
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

      <!-- チェックボックスにもv-modelを適用できる -->
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <!-- チェックボックスが複数個ある場合 -->
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="10">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="10">30代</label>
      <p>{{ eventData.target }}</p>

      <!-- ラジオボタン -->
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <!-- v-modelで同じデータを共有することでHTML上で紐ついていなくてもデータをバインディングできる -->

      <!-- セレクトボックス -->
      <p>開催場所</p>
      <!-- オブションで「select」の中に「multiple」を付けるとチェックボックスと同様に複数選択ができる -->
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      {{ eventData.location }}
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
      locations: ['Tokyo', 'Osaka', 'Fukuoka'],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        // 単体チェックボックスにv-modelを適用した場合、その中身はboolean(真偽値)になる
        isPrivate: false,
        // チェックボックスが複数ある場合は配列を用いてデータバインディングをする
        target: [], // 値を配列で指定する
        price: "無料",
        location: "Tokyo"
        // 複数選択を可能にした場合はチェックボックスと同様にデフォルトの値を配列[]にする
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