<template>
  <div> <!--  divで囲む -->
    <!-- 登録したコンポーネントを使えるようになる
    App.vueから見たら以下は「子」コンポーネントにあたる -->
    <LikeHeader>
      <!-- テンプレートを用意してその中に要素を書いてv-slotで名前を付けると
      各スロットに別々の要素を適用できる -->
      <template v-slot:title>
        <h2>フローラルの専門店</h2>
      </template>
      <!-- 必ずテンプレートとv-slotでセットで使用する -->
      <template v-slot:like>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <!-- 「props」で指定したものを属性値のように使うことでデータを受けわたせる -->
    <!-- v-bindで動的に表現できる。(親のdataのnumberを指定している)「:」のみでも良い -->
    <LikeNumber :total-number="number" @my-click="incNumber"></LikeNumber> <!-- @my-clickはカスタムイベント -->
    <LikeNumber :total-number="number"></LikeNumber>
    <!-- HTML内はpropsプロパティ(属性値)の名前はケバブケースで書くことが推奨されている -->
  </div>
</template>

<script>
// ローカル登録(特定のファイル(App.vue)でのみ使用するコンポーネント)
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      number: 92
    };
  },
  components: { // コンポーネンツオプション(オブジェクト)
    LikeHeader: LikeHeader // 「LikeHeader」のみで短縮も可能。ちなみにキー: バリュー
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