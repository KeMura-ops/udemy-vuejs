<template>
  <!-- 複数のデータを渡したい時はオブジェクトにして記述する -->
  <!-- :[引数の値]で引数を渡すことが出来る -->
  <!-- 引数の後に、「.」で修飾子をいくつも付け加えることが出来る -->
  <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">{{tmpData}}</p>
</template>

<script>
// カスタムディレクティブのローカル登録
export default {
  // データ関数を用意して、初期値を表示出来るが、
  // カスタムディレクティブにおいてはthisを用いて値を上書きすることは不可能なので注意する
  data() {
    return {
      tmpData: "新しい日の誕生"
    };
  },
  directives: {
    border(el, binding) {
      // this.tmpData = "こんにちは"  ←エラーになる
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