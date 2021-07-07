<template>
  <div>
    <LikeHeader #default="slotProps">
      <!-- コンポーネントにデフォルトスロットを記述する場合は
      「#default=""」とする -->
        <p>{{ slotProps }}</p>
        <h2>セガサターン</h2>
        <h3>マッキントッシュプラス</h3>
        <p>リサフランク420/現代のコンピュー</p>
        <!-- <template #[title]></template> 動的なスロット名 -->
        <!-- v-slotは「#」に置き換えることができる -->
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
      number: 92,
      title: "hello"
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