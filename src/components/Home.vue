<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">{{ tmpData }}</p>
    <h2>{{ title |  lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber" // ミックスインの登録

export default {
  // ミックスインの使用
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "新しい日の誕生",
    };
  },
  components: {
    CountNumber
  },
  // カスタムディレクティブのローカル登録
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