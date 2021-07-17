<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">{{ tmpData }}</p>
    <h2>{{ title |  lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <!-- フィルターの挙動を確認する -->
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
// カスタムディレクティブのローカル登録
export default {
  data() {
    return {
      tmpData: "新しい日の誕生",
      title: "Welcome to Kanagawa",
      subTitle: "Kanagawa is a great city",
      number: 0
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