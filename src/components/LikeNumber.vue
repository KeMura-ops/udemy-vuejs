<template>
  <!-- 単一ファイルコンポーネントで扱う際は複数の処理を並べて使いたい場合は
  divタグなどで、一つ要素の中に入れ込む -->
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="inc">+1</button>
  </div>
</template>

<script>
export default {
   // 「props」プロパティを用いることで親コンポーネントから子コンポーネントにデータを渡すことが出来る
  props: ["totalNumber"], // propsはdataと同様に使用することができる。また、[]配列や{}オブジェクトで書ける
  computed: {
    halfNumber() { // 関数宣言
      return this.totalNumber / 2 // thisでアクセスできる
    }
  },
  // js内のプロパティの書き方はキャメルケースが推奨
  methods: {
    inc() {
      //「$emit」を使うことで、カスタムイベントを作れる
      // $emitによって子コンポーネントの値を親へと受け渡したような処理を作れる
      // 第一引数はemitの名前、以降は中身
      this.$emit("my-click", this.totalNumber + 1);
      // カスタムイベントの名前はケバブケースにする
    }
  }
}
</script>

<style scoped> 
  div {
    border: 1px solid red;
  }
</style>

<!-- コンポーネントの数々は「components」ディレクトリにまとめて管理する -->
<!-- cssに範囲指定をしたい場合は「scoped」を使用する(全てのdivタグに適用されるため)
検証ツールでheadタグを見るとdiv[data-v-27663f0]と言ったdivタグに属性が付いている
その特定の属性で判別してそれぞれにCSSを適用させている(スコープ付きCSS) -->

<!--
コンポーネント： PascalCase
$emit： kebab-case
props(属性として使う時)： kebab-case
props(それ以外)：camelCase
-->