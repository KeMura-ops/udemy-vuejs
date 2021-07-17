<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">{{ tmpData }}</p>
    <h2>{{ title |  lowerCase }}</h2> <!-- フィルターの適用 -->
    <!-- 「プロパティ名 | フィルター名」でどの文字列でもフォーマット変更に対応できる -->
    <p>{{ subTitle | lowerCase }}</p>
  </div>
</template>

<script>
// カスタムディレクティブのローカル登録
export default {
  data() {
    return {
      tmpData: "新しい日の誕生",
      title: "Welcome to Kanagawa",
      subTitle: "Kanagawa is a great city"
      // subTitleのようにもう一つフォーマットを変更したい場合、再びcomputedを用意するのは手間なので(下記参照)
      // フィルターを使用し、一まとめに出来る。
    };
  },
  // フィルターのローカル登録
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
};
</script>

<!-- computed: { // computedでテキストフォーマットを変更する方法
  upperCaseTitle() {
    return this.title.toUpperCase(); // 大文字にする
  }
}, -->