<template>
  <div>
    <!-- スロットプロパティの省略記法(テンプレートではなくコンポーネントに書く記法)
    デフォルトのスロットしか存在しない場合にのみ
    コンポーネントに記述できる(他に名前付きのスロットが存在しないという前提) -->
    <LikeHeader v-slot="slotProps">
      <!-- 名前付きではないデフォルトのスロット -->
        <p>{{ slotProps }}</p>
        <h2>セガサターン</h2>
        <h3>マッキントッシュプラス</h3>
        <p>リサフランク420/現代のコンピュー</p>
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