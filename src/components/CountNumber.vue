<template>
  <div>
    <h2>{{ title |  lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
// ミックスインの登録
import { tokyoNumber } from "@/tokyoNumber"; // tokyoNumber.jsのパス

export default {
  // ミックスインによってインポートしたjsファイルを呼び出す
  mixins: [tokyoNumber],
  // コンポーネントとミックスインにライフサイクルフックの処理がある場合
  // 両方の処理が行われるが、ミックスインのあとで以下のライフサイクルフックが実行される
  created() {
    console.log("コンポーネントからクリエイトされてまーす");
  }
};
</script>